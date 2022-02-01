import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import Seo from '../components/Head';
import Link from 'next/link';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
      }
    }, `/movies/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" onClick={() => onClick(movie.id, movie.original_title)} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link 
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                }
              }, `/movies/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// client가 아니라 server 쪽에서만 작동한다
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results
    }
  }
}