import { useState, useEffect } from 'react';
import { api } from '../services/api';

// Interfaces
import { GenreResponseProps } from '../interfaces/GenreResponseProps';

// Components
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[],
  click: any,
  genreId: number,
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.click(genre.id)}
            selected={props.genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}