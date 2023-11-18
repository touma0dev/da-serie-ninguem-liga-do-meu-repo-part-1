import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style/player.css';

function Player(props) {
    const [volume, setVolume] = useState(50); // Valor inicial do volume

    useEffect(() => {
        // Aqui você pode interagir com a tag específica usando querySelector
        const volumeContainer = document.querySelector('.rhap_volume-container');

        // Verifica se o elemento existe antes de interagir com ele
        if (volumeContainer) {
            // Atualiza o valor de aria-valuenow
            volumeContainer.setAttribute('aria-valuenow', volume);
        }
    }, [volume]); // Executa sempre que o valor do volume mudar

    return (
        <div className='container-player'>
            <h1 className='tittle-musica'>Vai Rabetão 8D</h1>
            <img src="0.jpg" alt="mc-8d" />
            <AudioPlayer
                className='component-musica'
                autoPlay
                src="rabetão-8d.m4a"
                onPlay={e => console.log("onPlay")}
                volume={volume / 100} // Volume deve estar entre 0 e 1
            />
        </div>
    );
}

export default Player;
