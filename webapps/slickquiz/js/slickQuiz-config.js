// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Tes Sang Penemu",
        "main":    "<p>Mari kita belajar tanya jawab tentang tokoh-tokoh penemu di dunia !</p>",
        "results": "<h5>Tetap Belajar</h5><p>Dan Ketahuilah Sang Penemu Alat-alat Di Sekitar Kita :)</p>",
        "level1":  "Anda Super Jenius Sekali !",
        "level2":  "Anda Jenius",
        "level3":  "Lumayan lah !",
        "level4":  "Hmm.. belajar lagi ya !",
        "level5":  "Yah ! Kok Banyak yang Salah" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Adam Osborn Menemukan Sebuah Alat Canggih, Apakah Alat Itu ?",
            "a": [
                {"option": "Panci",      "correct": false},
                {"option": "Jam",     "correct": false},
                {"option": "Laptop",      "correct": true},
                {"option": "Televisi",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Sipp..</span>Adam Osborn Adalah Penemu Laptop</p>",
            "incorrect": "<p><span>Haduh</span> Jawabannya Salah, Yang Benar adalah Adam Osborn Sang Penemu Laptop</p>" // no comma here
        },
        { // Question 2
            "q": "Anjungan Tunai Mandiri (ATM), Siapa yang menemukan alat tersebut?",
            "a": [
                {"option": "Tukul Arwana",    "correct": false},
                {"option": "John Shepherd Baron",     "correct": true},
                {"option": "Alexander Graham Bell",      "correct": false},
                {"option": "Robert Adler",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul</span> John Shepherd Baron Adalah Penemu ATM</p>",
            "incorrect": "<p><span>Salah</span> Jawaban Yang Benar Adalah John Shepherd Baron.</p>" // no comma here
        },
        { // Question 3
            "q": "Kamu tiap hari menggunakan Komputer? Siapa sih yang menemukannya?",
            "a": [
                {"option": "Guglielmo Marconi",        "correct": false},
                {"option": "Ricardo Montolivo",           "correct": false},
                {"option": "Francis Dunnery",  "correct": false},
                {"option": "Howard Hathaway Aiken",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Howard Hathaway Aiken adalah Penemu Komputer</p>",
            "incorrect": "<p><span>Oh.. Salah Bray !</span> Yang menemukan Komputer Adalah Pak Howard Hathaway Aiken ^_^</p>" // no comma here
        },
        { // Question 4
            "q": "Apakah Blaise Pascal Yang Menemukan Helikopter?",
            "a": [
                {"option": "Yes",    "correct": false},
                {"option": "No",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Yups</span> Blaise Pascal Memang Bukan Penemu Helikopter, Tapi dia adalah Sang Penemu Kalkulator</p>",
            "incorrect": "<p><span>Hmmm.. Salah</span> Blaise Pascal Itu Penemu kalkulator ! :D" // no comma here
        },
        { // Question 5
            "q": "Radio itu Siapa yang menemukan?",
            "a": [
                {"option": "Robert Goddard",   "correct": false},
                {"option": "Guglielmo Marconi",         "correct": true},
                {"option": "John Logie Baird",  "correct": false},
                {"option": "Rudolf Diesel",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Benar Sekali</p>",
            "incorrect": "<p><span>Hah ! Salah !</span> Jawaban Yang Benar Adalah Guglielmo Marconi</p>" // no comma here
        },
        { // Question 6
            "q": "Pria Kelahiran Skotlandia ini adalah Sang Penemu Televisi. Siapakah Dia?",
            "a": [
                {"option": "Robert Goddard",   "correct": false},
                {"option": "John Logie Baird",         "correct": true},
                {"option": "Mario Costaz",  "correct": false},
                {"option": "Garret Augustus",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Bagus</span> John Logie Memang Sang Penemu TV</p>",
            "incorrect": "<p><span>Wah, Salah !</span> Jawaban Yang Benar Adalah John Logie Baird</p>" // no comma here
        },
        { // Question 7
            "q": "Pria Kelahiran Massachusetts ini adalah Sang Penemu Roket. Siapakah Dia?",
            "a": [
                {"option": "Robert Goddard",   "correct": true},
                {"option": "John Logie Baird",         "correct": false},
                {"option": "Mario Costaz",  "correct": false},
                {"option": "Garret Augustus",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Bagus</span> Goddard Memang Sang Penemu Roket</p>",
            "incorrect": "<p><span>Hmm, Salah !</span> Jawaban Yang Benar Adalah Robert Goddard</p>" // no comma here
        },
        { // Question 8
            "q": "Ruangan Yang Menggunakan AC Adem Pastinya? Ciyus, Siapa Penemu AC?",
            "a": [
                {"option": "Willis Carrier",   "correct": true},
                {"option": "John Logie Baird",         "correct": false},
                {"option": "Mario Costaz",  "correct": false},
                {"option": "Garret Augustus",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Bagus</span> So Good</p>",
            "incorrect": "<p><span>Ciyus? Kamu Salah Dech !</span>Sang Penemu AC adalah Willis Carrier</p>" // no comma here
        },
        { // Question 9
            "q": "Traffic Light atau Lampu Lalu Lintas itu Temuan Siapa?",
            "a": [
                {"option": "Garret Augustus Morgan",   "correct": true},
                {"option": "Alejandro Gomezpas",         "correct": false},
                {"option": "George Eastman",  "correct": false},
                {"option": "Wilbur Wright & Orville Wright",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Bagus</span> Anda Pinter Banget ! :)</p>",
            "incorrect": "<p><span>Ciyus? Salah !</span>Yang Bener adalah Garret Augustus Morgan</p>" // no comma here
        },
        { // Question 10
            "q": "Guglielmo Marconi Berasal Dari Mana Sih?",
            "a": [
                {"option": "Italia",   "correct": true},
                {"option": "Manado",         "correct": false},
                {"option": "Skotlandia",  "correct": false},
                {"option": "Spanyol",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Yups</span> Dia memang dari Italia, dan Sang Penemu Radio! :)</p>",
            "incorrect": "<p><span>Hah? Salah? </span>Italia Yang Bener :(</p>" // no comma here
        },
        { // Question 11
            "q": "Penemu mesin fotocopy, tau gak?",
            "a": [
                {"option": "Chester F. Carlson",   "correct": true},
                {"option": "Guglielmo Marconi",         "correct": false},
                {"option": "John Sheperd Baron",  "correct": false},
                {"option": "Gak tau?",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Yups</span> Chester adalah Penemu Mesin Fotocopy! :)</p>",
            "incorrect": "<p><span>Salah ya ? </span> :(</p>" // no comma here
        },
        { // Question 12
            "q": "Pierre Gilles de Gennes adalah Penemu?",
            "a": [
                {"option": "LCD",   "correct": true},
                {"option": "TV",         "correct": false},
                {"option": "Laptop",  "correct": false},
                {"option": "Mie Instan",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Iya,</span> Pierre adalah penemu LCD</p>",
            "incorrect": "<p><span>Salah ! </span>LCD yang benar</p>" // no comma here
        },
        { // Question 13
            "q": "Kamu yang pernah memakai Kamera (Kodak), Kira-kira tahu siapa yang menemukannya?",
            "a": [
                {"option": "George Eastman",   "correct": true},
                {"option": "Prabu Dewantara",         "correct": false},
                {"option": "Robert Adler",  "correct": false},
                {"option": "Willis Carrier",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Sip,</span> George Eastman adalah penemu Kamera</p>",
            "incorrect": "<p><span>Salah ! </span>George Eastman yang benar !</p>" // no comma here
        },
        { // Question 14
            "q": "Siapa yang menemukan Compact Disc?",
            "a": [
                {"option": "James T. Russel",   "correct": true},
                {"option": "Blaise Pascal",         "correct": false},
                {"option": "Robert Adler",  "correct": false},
                {"option": "Willis Carrier",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Sip,</span> James adalah penemu Compact Disc</p>",
            "incorrect": "<p><span>Salah ! </span>james T. Russel yang benar !</p>" // no comma here
        },
        { // Question 15
            "q": "Blaise Pascal yang menemukan rumus pascal dan kalkulator berasal dari negara?",
            "a": [
                {"option": "Prancis",   "correct": true},
                {"option": "Belanda",         "correct": false},
                {"option": "Inggris",  "correct": false},
                {"option": "Italia",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Sip,</span> Pascal berasal dari Prancis</p>",
            "incorrect": "<p><span>Salah ! </span> Prancis yang benar !</p>" // no comma here
        }
    ]
};