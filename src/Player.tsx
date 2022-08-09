import React, {useMemo, useState} from "react";
import WaitingForLiftoff from './songs/waiting-for-liftoff.mp3';
import IThoughtWeCouldTouchTheSun from './songs/i-thought-we-could-touch-the-sun.mp3';
import GalaxyGrease from './songs/galaxy-grease.mp3';
import SunsetOverMars from './songs/sunset-over-mars.mp3';
import SaturnsWeddingRing from './songs/saturns-wedding-ring.mp3';
import CreamCheeseOnTheMoon from './songs/cream-cheese-on-the-moon.mp3';
import CantinaOnTaurus from './songs/cantina-on-taurus.mp3';
import OrbitsOfEarth from './songs/orbits-of-earth.mp3';
import ClubAstroid from './songs/club-astroid.mp3';
import MaroonedOnNeptune from './songs/marooned-on-neptune.mp3';
import {Song} from "./models";
import album from "./assets/album.jpeg";
import {AudioPlaylist} from "ts-audio";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

interface PlayerProps {
    play: any;
    pause: any;
    next: any;
    prev: any;
    isPlaying: boolean;
    setIsPlaying: any;
}

export const Playlist = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const songs: Song[] = useMemo(
        () => [
            {
                name: 'Waiting for Liftoff',
                artist: 'Ed Briggler',
                cover: album,
                src: WaitingForLiftoff,
            },
            {
                name: 'I Thought We Could Touch the Sun',
                artist: 'Ed Briggler',
                cover: album,
                src: IThoughtWeCouldTouchTheSun,
            },
            {
                name: 'Galaxy Grease',
                artist: 'Ed Briggler',
                cover: album,
                src: GalaxyGrease,
            },
            {
                name: 'Sunset over Mars',
                artist: 'Ed Briggler',
                cover: album,
                src: SunsetOverMars,
            },
            {
                name: `Saturn's Wedding Ring`,
                artist: 'Ed Briggler',
                cover: album,
                src: SaturnsWeddingRing,
            },
            {
                name: 'Cream Cheese on the Moon',
                artist: 'Ed Briggler',
                cover: album,
                src: CreamCheeseOnTheMoon,
            },
            {
                name: 'Cantina on Taurus',
                artist: 'Ed Briggler',
                cover: album,
                src: CantinaOnTaurus,
            },
            {
                name: 'Orbits of Earth',
                artist: 'Ed Briggler',
                cover: album,
                src: OrbitsOfEarth,
            },
            {
                name: 'Club Astroid',
                artist: 'Ed Briggler',
                cover: album,
                src: ClubAstroid,
            },
            {
                name: `Maroon'ed on Neptune`,
                artist: 'Ed Briggler',
                cover: album,
                src: MaroonedOnNeptune,
            }
        ],
        []);

    const playlist = useMemo(() => {
        return AudioPlaylist({
            files: songs.map((song) => song.src),
        });
    }, [songs]);

    const handlePlay = () => {
        playlist.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        playlist.pause();
        setIsPlaying(false);
    };

    const handleSkip = () => {
        playlist.next();
        setIsPlaying(true);
        setCurrentSong((currentSong)=> (currentSong + 1 + songs.length) % songs.length);
    };

    const handlePrevious = () => {
        playlist.prev();
        setIsPlaying(true);
        setCurrentSong((currentSong)=> (currentSong - 1 + songs.length) % songs.length);
    };

    return (
        <>
            <div className="App">
                <div className="c-player">
                    <div className="c-player--details">
                        {' '}
                        <div className="details-img">
                            {' '}
                            <img src={songs[currentSong].cover} alt="img" />
                        </div>
                        <h1 className="details-title">{songs[currentSong].name}</h1>
                        <h2 className="details-artist">{songs[currentSong].artist}</h2>
                    </div>
                    <Player
                        play={handlePlay}
                        pause={handlePause}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        next={handleSkip}
                        prev={handlePrevious}
                    />
                </div>
            </div>
        </>
    );
};

export const Player = ({ play, pause, next, prev, isPlaying, setIsPlaying }: PlayerProps) => (
    <div className="c-player--controls">
        <button className="skip-btn" onClick={prev}>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying ? play : pause)}
        >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick={next}>
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
);
