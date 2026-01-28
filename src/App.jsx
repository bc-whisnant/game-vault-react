import './App.css'
import Heading from './components/Heading'
import Search from './components/Search'
import Filters from './components/Filters'
import CardsContainer from './components/CardsContainer'


function App() {

  const buttons = [
    {
      id: 0,
      text: 'All Games',
      isActive: true
    },
    {
      id: 1,
      text: 'Action',
      isActive: false
    },
    {
      id: 2,
      text: 'RPG',
      isActive: false
    },
    {
      id: 3,
      text: 'Shooter',
      isActive: false
    },
    {
      id: 4,
      text: 'Puzzle',
      isActive: false
    },
    {
      id: 5,
      text: 'Indie',
      isActive: false
    }
  ]

  const games = [
    {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "released": "2013-09-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "rating": 4.47,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 4388,
                "percent": 59.06
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 2428,
                "percent": 32.68
            },
            {
                "id": 3,
                "title": "meh",
                "count": 469,
                "percent": 6.31
            },
            {
                "id": 1,
                "title": "skip",
                "count": 145,
                "percent": 1.95
            }
        ],
        "ratings_count": 7312,
        "reviews_text_count": 69,
        "added": 22437,
        "added_by_status": {
            "yet": 556,
            "owned": 12844,
            "beaten": 6430,
            "toplay": 646,
            "dropped": 1183,
            "playing": 778
        },
        "metacritic": 92,
        "playtime": 74,
        "suggestions_count": 446,
        "updated": "2026-01-28T17:30:06",
        "user_game": null,
        "reviews_count": 7430,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "platforms": [
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 1413,
                    "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 186,
                    "name": "Xbox Series S/X",
                    "slug": "xbox-series-x",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 1213,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 3164,
                    "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 560210,
                    "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": {
                    "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                    "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
                },
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 6972,
                    "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 2808,
                    "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 5727,
                    "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            }
        ],
        "genres": [
            {
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 191374,
                "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
            }
        ],
        "stores": [
            {
                "id": 290376,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 123009,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                }
            },
            {
                "id": 290375,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 8069,
                    "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
                }
            },
            {
                "id": 438095,
                "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games",
                    "domain": "epicgames.com",
                    "games_count": 1437,
                    "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                }
            },
            {
                "id": 290377,
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360",
                    "domain": "marketplace.xbox.com",
                    "games_count": 1915,
                    "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                }
            },
            {
                "id": 290378,
                "store": {
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store",
                    "domain": "microsoft.com",
                    "games_count": 4934,
                    "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                }
            }
        ],
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 250645,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 51638,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 42516,
                "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 24108,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 39675,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3451,
                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 26581,
                "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 14370,
                "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 9246,
                "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            },
            {
                "id": 411,
                "name": "cooperative",
                "slug": "cooperative",
                "language": "eng",
                "games_count": 6576,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 37361,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 14695,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 4,
                "name": "Funny",
                "slug": "funny",
                "language": "eng",
                "games_count": 28824,
                "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 8501,
                "image_background": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 14854,
                "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
            },
            {
                "id": 150,
                "name": "Third-Person Shooter",
                "slug": "third-person-shooter",
                "language": "eng",
                "games_count": 4163,
                "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
            },
            {
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 1135,
                "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
            },
            {
                "id": 144,
                "name": "Crime",
                "slug": "crime",
                "language": "eng",
                "games_count": 3268,
                "image_background": "https://media.rawg.io/media/games/345/3452d9d4483686c602372e0e6b3bb4cc.jpg"
            },
            {
                "id": 62349,
                "name": "vr mod",
                "slug": "vr-mod",
                "language": "eng",
                "games_count": 17,
                "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            },
            {
                "id": 1827221,
                "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
            },
            {
                "id": 1827222,
                "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
            },
            {
                "id": 1827223,
                "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
            },
            {
                "id": 1827225,
                "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
            },
            {
                "id": 1827226,
                "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
            },
            {
                "id": 1827227,
                "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
            }
        ]
    },
    {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "released": "2015-05-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "rating": 4.64,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 5544,
                "percent": 76.6
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1179,
                "percent": 16.29
            },
            {
                "id": 3,
                "title": "meh",
                "count": 317,
                "percent": 4.38
            },
            {
                "id": 1,
                "title": "skip",
                "count": 198,
                "percent": 2.74
            }
        ],
        "ratings_count": 7121,
        "reviews_text_count": 82,
        "added": 22084,
        "added_by_status": {
            "yet": 1203,
            "owned": 12843,
            "beaten": 5267,
            "toplay": 852,
            "dropped": 1021,
            "playing": 898
        },
        "metacritic": 92,
        "playtime": 43,
        "suggestions_count": 688,
        "updated": "2026-01-27T18:56:34",
        "user_game": null,
        "reviews_count": 7238,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "platforms": [
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 1413,
                    "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 186,
                    "name": "Xbox Series S/X",
                    "slug": "xbox-series-x",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 1213,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 107975,
                    "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 6972,
                    "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 5748,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 560210,
                    "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 5727,
                    "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "Apple Macintosh",
                    "slug": "mac"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                }
            }
        ],
        "genres": [
            {
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 191374,
                "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
            },
            {
                "id": 5,
                "name": "RPG",
                "slug": "role-playing-games-rpg",
                "games_count": 61885,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
            }
        ],
        "stores": [
            {
                "id": 354780,
                "store": {
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog",
                    "domain": "gog.com",
                    "games_count": 7134,
                    "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
                }
            },
            {
                "id": 3565,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 8069,
                    "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
                }
            },
            {
                "id": 305376,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 123009,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                }
            },
            {
                "id": 312313,
                "store": {
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store",
                    "domain": "microsoft.com",
                    "games_count": 4934,
                    "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                }
            },
            {
                "id": 676022,
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo",
                    "domain": "nintendo.com",
                    "games_count": 9147,
                    "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                }
            }
        ],
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 250645,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 24108,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 39675,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3451,
                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 26581,
                "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 27236,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 9246,
                "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 14695,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 64,
                "name": "Fantasy",
                "slug": "fantasy",
                "language": "eng",
                "games_count": 32924,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 8501,
                "image_background": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
            },
            {
                "id": 97,
                "name": "Action RPG",
                "slug": "action-rpg",
                "language": "eng",
                "games_count": 8681,
                "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
            },
            {
                "id": 41,
                "name": "Dark",
                "slug": "dark",
                "language": "eng",
                "games_count": 18693,
                "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
            },
            {
                "id": 44,
                "name": "Nudity",
                "slug": "nudity",
                "language": "eng",
                "games_count": 8838,
                "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
            },
            {
                "id": 336,
                "name": "controller support",
                "slug": "controller-support",
                "language": "eng",
                "games_count": 293,
                "image_background": "https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg"
            },
            {
                "id": 145,
                "name": "Choices Matter",
                "slug": "choices-matter",
                "language": "eng",
                "games_count": 8339,
                "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
            },
            {
                "id": 40,
                "name": "Dark Fantasy",
                "slug": "dark-fantasy",
                "language": "eng",
                "games_count": 5666,
                "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
            },
            {
                "id": 192,
                "name": "Mature",
                "slug": "mature",
                "language": "eng",
                "games_count": 4774,
                "image_background": "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg"
            },
            {
                "id": 66,
                "name": "Medieval",
                "slug": "medieval",
                "language": "eng",
                "games_count": 8059,
                "image_background": "https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg"
            },
            {
                "id": 82,
                "name": "Magic",
                "slug": "magic",
                "language": "eng",
                "games_count": 11333,
                "image_background": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg"
            },
            {
                "id": 218,
                "name": "Multiple Endings",
                "slug": "multiple-endings",
                "language": "eng",
                "games_count": 11544,
                "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            {
                "id": 30336,
                "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
            },
            {
                "id": 30337,
                "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
            },
            {
                "id": 30338,
                "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
            },
            {
                "id": 30339,
                "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
            },
            {
                "id": 30340,
                "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
            },
            {
                "id": 30342,
                "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
            }
        ]
    },
]

console.log('games here', games)


  return (
    <main className="container">
      <Heading />
      <div className="search-container">
        <Search />
        <Filters buttons={buttons} />
      </div>
      <CardsContainer games={games} />
    </main>
  )
}

export default App
