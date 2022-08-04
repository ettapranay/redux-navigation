import { LOAD_PRODUCTS } from "../actions";

const initialState = {
    products: [
        
          
            {
            "_id": "1",
           "name": "Mayabazar",
            "releaseYear": 1957,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "Drama",
            "imdbRating": 8.8,
            "overview": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            "imgUrl": "https://www.researchgate.net/profile/Stefan-Bolea/publication/309717420/figure/fig1/AS:425102790664192@1478363811754/Fight-Club-movie-poster-1999.png",
            "director": "kadiri Venkata Reddy"
        },{
            "_id": "2",
            "name": "jersey",
            "releaseYear": 2019,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 8.8,
            "overview": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            "imgUrl": "70",
            "director": "Gowtam tinnanuri"
        },{
            "_id": "3",
            "name": "Major",
            "releaseYear": 2022,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 7.8,
            "overview": "With Eternals, Academy Award winning director of Nomadland, Chloé Zhao sinks her teeth into the heart of American pop culture — the MCU.",
            "imgUrl": "66",
            "director": "Sashi Kiran Tikka"
        },{
            "_id": "4",
            "name": "vikram",
            "releaseYear": 2022,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 9.8,
            "overview": "It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi ",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
            "director": "Lokesh Kanagaraj"
        },{
            "_id": "5",
            "name": "RRR",
            "releaseYear": 2022,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 9.8,
            "overview": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. ",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            "director": "S.S.rajamouli"
        },
        {
            "_id": "6",
            "name": "The Matrix",
            "releaseYear":1990,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 8.8,
            "overview": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence. ",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            "director": "Lana Wachowski"
        },
        {
            "_id": "7",
            "name": "Star Wars",
            "releaseYear":1977,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 7.8,
            "overview": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue ",
            "imgUrl": "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=960",
            "director": "George Lucas"
        },{
            "_id": "8",
            "name": "Gladiator",
            "releaseYear":2000,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "action",
            "imdbRating": 7.8,
            "overview": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            "director": "George Lucas"
        },
        {
            "_id": "9",
            "name": "Joker ",
            "releaseYear":2019,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "drama",
            "imdbRating": 8.3,
            "overview": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
            "director": "Todd Phillips"
        },
        {
            "_id": "10",
            "name": "Jaws",
            "releaseYear":1975,
            "certificate": "A",
            "runtime": "139 min",
            "genre": "drama",
            "imdbRating": 8.3,
            "overview": "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1W517JeKbIMHFuTkSauSdK68uNBhY0zz-A&usqp=CAU",
            "director": "Steven Spielberg"
        }
          
    ]
}

const ProductReducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                products: [
                    ...state.products,
                    action.products
                ]
            }
        default:
            return state;
    }
}

export default ProductReducer;