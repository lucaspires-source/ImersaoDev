
const filmes = [
    "https://m.media-amazon.com/images/M/MV5BMzFkODkwN2ItMTk1NS00OWZiLTllNmMtYzBiNmY1OTk2YzI0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR3,0,182,268_AL_.jpg", 
    "https://m.media-amazon.com/images/M/MV5BMjIxMTg5NjMzNl5BMl5BanBnXkFtZTcwMzgzMjI5NA@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
    "https://m.media-amazon.com/images/M/MV5BODAyMjQ4NzE1OF5BMl5BanBnXkFtZTcwMTQzMDYwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
    "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY268_CR1,0,182,268_AL_.jpg",
]



for (let i = 0; i < filmes.length; i++) {
    document.write("<img src="+filmes[i]+"/>")

}