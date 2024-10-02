document.addEventListener('DOMContentLoaded', () => {

    const ArtistsData = [
        { name: 'Henriue e Juliano', image: './img/artista-henrique-juliano.jpg' }, 
        { name: 'Jorge e Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto e Cristiano', image: './img/artista-ze-neto.jpg' },
        { name:'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
         { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Mateus e Kauan', image: './img/artista-mateus-kauan.jpg'}
        ]
    
        const albumsData = [
            {name: 'White Noise ( Sleep e Relaxation Sound)', artist: 'Sleepy john', image: './img/album-white-noise.jpg'},
           
            {name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
          
            { name: 'caju', artist: 'Liniker', image: './img/album-caju.jpg'},
         
        ];

const artistGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')

ArtistsData.forEach(artist => {
const artistCard = document.createElement('div')
artistCard.classList.add('artist-card')

artistCard.innerHTML = `

<img src="${artist.image}" alt="${artist.name}">
<h3>${artist.name}</h3>
<p>artista</p>
`
artistGrid.appendChild(artistCard)


})




albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')
    
    albumCard.innerHTML = `
    
    <div>
    <img src="${album.image}" alt="${album.name}">
     <h3>${album.name}</h3>
    <p>${album.artist}</p>
    </div>
    `
    albumsGrid.appendChild(albumCard)
})

})
