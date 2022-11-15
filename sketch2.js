const champPaths = ["./images/AatroxSquare.png",
"./images/AhriSquare.png",
"./images/AkaliSquare.png",
"./images/AkshanSquare.png",
"./images/AlistarSquare.png",
"./images/AmumuSquare.png",
"./images/AniviaSquare.png",
"./images/AnnieSquare.png",
"./images/ApheliosSquare.png",
"./images/AsheSquare.png",
"./images/Aurelion_SolSquare.png",
"./images/AzirSquare.png",
"./images/BardSquare.png",
"./images/Bel'VethSquare.webp",
"./images/BlitzcrankSquare.png",
"./images/BrandSquare.png",
"./images/BraumSquare.png",
"./images/CaitlynSquare.png",
"./images/CamilleSquare.png",
"./images/CassiopeiaSquare.png",
"./images/Cho'GathSquare.png",
"./images/CorkiSquare.png",
"./images/DariusSquare.png",
"./images/DianaSquare.png",
"./images/Dr._MundoSquare.png",
"./images/DravenSquare.png",
"./images/EkkoSquare.png",
"./images/EliseSquare.png",
"./images/EvelynnSquare.png",
"./images/EzrealSquare.png",
"./images/FiddlesticksSquare.png",
"./images/FioraSquare.png",
"./images/FizzSquare.png",
"./images/GalioSquare.png",
"./images/GangplankSquare.png",
"./images/GarenSquare.png",
"./images/GnarSquare.png",
"./images/GragasSquare.png",
"./images/GravesSquare.png",
"./images/GwenSquare.png",
"./images/HecarimSquare.png",
"./images/HeimerdingerSquare.png",
"./images/IllaoiSquare.png",
"./images/IreliaSquare.png",
"./images/IvernSquare.png",
"./images/JannaSquare.png",
"./images/Jarvan_IVSquare.png",
"./images/JaxSquare.png",
"./images/JayceSquare.png",
"./images/JhinSquare.png",
"./images/JinxSquare.png",
"./images/K%27Sante_OriginalSquare.webp",
"./images/Kai'SaSquare.png",
"./images/KalistaSquare.png",
"./images/KarmaSquare.png",
"./images/KarthusSquare.png",
"./images/KassadinSquare.png",
"./images/KatarinaSquare.png",
"./images/KayleSquare.png",
"./images/KaynSquare.png",
"./images/KennenSquare.png",
"./images/Kha'ZixSquare.png",
"./images/KindredSquare.png",
"./images/KledSquare.png",
"./images/Kog'MawSquare.png",
"./images/LeBlancSquare.png",
"./images/Lee_SinSquare.png",
"./images/LeonaSquare.png",
"./images/LilliaSquare.png",
"./images/LissandraSquare.png",
"./images/LucianSquare.png",
"./images/LuluSquare.png",
"./images/LuxSquare.png",
"./images/MalphiteSquare.png",
"./images/MalzaharSquare.png",
"./images/MaokaiSquare.png",
"./images/Master_YiSquare.png",
"./images/MissFortuneSquare.png",
"./images/MordekaiserSquare.png",
"./images/MorganaSquare.png",
"./images/NamiSquare.png",
"./images/NasusSquare.png",
"./images/NautilusSquare.png",
"./images/NeekoSquare.png",
"./images/NidaleeSquare.png",
"./images/Nilah_OriginalSquare.webp",
"./images/NocturneSquare.png",
"./images/Nunu_&_WillumpSquare.png",
"./images/OlafSquare.png",
"./images/OriannaSquare.png",
"./images/OrnnSquare.png",
"./images/PantheonSquare.png",
"./images/PoppySquare.png",
"./images/PykeSquare.png",
"./images/QiyanaSquare.png",
"./images/QuinnSquare.png",
"./images/RakanSquare.png",
"./images/RammusSquare.png",
"./images/Rek'SaiSquare.png",
"./images/RellSquare.png",
"./images/Renata_GlascSquare.webp",
"./images/RenektonSquare.png",
"./images/RengarSquare.png",
"./images/RivenSquare.png",
"./images/RumbleSquare.png",
"./images/RyzeSquare.png",
"./images/SamiraSquare.png",
"./images/SejuaniSquare.png",
"./images/SennaSquare.png",
"./images/SeraphineSquare.png",
"./images/SettSquare.png",
"./images/ShacoSquare.png",
"./images/ShenSquare.png",
"./images/ShyvanaSquare.png",
"./images/SingedSquare.png",
"./images/SionSquare.png",
"./images/SivirSquare.png",
"./images/SkarnerSquare.png",
"./images/SonaSquare.png",
"./images/SorakaSquare.png",
"./images/SwainSquare.png",
"./images/SylasSquare.png",
"./images/SyndraSquare.png",
"./images/Tahm_KenchSquare.png",
"./images/TaliyahSquare.png",
"./images/TalonSquare.png",
"./images/TaricSquare.png",
"./images/TeemoSquare.png",
"./images/ThreshSquare.png",
"./images/TristanaSquare.png",
"./images/TrundleSquare.png",
"./images/TryndamereSquare.png",
"./images/Twisted_FateSquare.png",
"./images/TwitchSquare.png",
"./images/UdyrSquare.png",
"./images/UrgotSquare.png",
"./images/VarusSquare.png",
"./images/VayneSquare.png",
"./images/VeigarSquare.png",
"./images/Vel'KozSquare.png",
"./images/VexSquare.png",
"./images/ViegoSquare.png",
"./images/ViktorSquare.png",
"./images/ViSquare.png",
"./images/VladimirSquare.png",
"./images/VolibearSquare.png",
"./images/WarwickSquare.png",
"./images/WukongSquare.png",
"./images/XayahSquare.png",
"./images/XerathSquare.png",
"./images/Xin_ZhaoSquare.png",
"./images/YasuoSquare.png",
"./images/YoneSquare.png",
"./images/YorickSquare.png",
"./images/YuumiSquare.png",
"./images/ZacSquare.png",
"./images/ZedSquare.png",
"./images/ZeriSquare.webp",
"./images/ZiggsSquare.png",
"./images/ZileanSquare.png",
"./images/ZoeSquare.png",
"./images/ZyraSquare.png"
]
const champImages = []

function preload() {
  champPaths.forEach(champPath => champImages.push(loadImage(champPath)))
}

let picksLeft
let champCols
let champRows
let thumbSize
let pickSize
let pickAreaX

let testing = true
let minPlayers = 2
let maxPlayers = 21
let maxPicks
let players = []
let activePlayer = 0

let playerCols = 1
let playerRows = 1
let playerWidth
let playerHeight
let pickCols
let pickRows

const pickAreaConfigs = [
  {
    players: 2,
    player: {
      rows:2,
      cols:1,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 3,
    player: {
      rows:3,
      cols:1,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 4,
    player: {
      rows:4,
      cols:1,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 8,
    player: {
      rows:4,
      cols:2,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 10,
    player: {
      rows:5,
      cols:2,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 12,
    player: {
      rows:6,
      cols:2,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 15,
    player: {
      rows:6,
      cols:3,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
  {
    players: 21,
    player: {
      rows:7,
      cols:3,
    },
    picks: {
      rows: 0,
      cols: 0,
    }
  },
]

const pickedChamps = []

function setup() {
	createCanvas(windowWidth, windowHeight);
  champCols = 10
  champRows = Math.ceil(champImages.length/champCols)
  thumbSize = Math.min(width*0.4/champCols,height/champRows)
  pickSize = thumbSize
  pickAreaX = thumbSize * (champCols + 0.5)

  if (false && testing) {
		for (let  x= 0; x < 10; x++) {
			players.push({name:x,picks:[]})
		}
  } else {
		const numPlayers = prompt('How many players do you have? Min: '+minPlayers+'. Max: '+maxPlayers+' for nice formatting, in theory unlimited.')
    for (let i = 0; i < numPlayers; i++) {
      if (testing) {
        players.push({name:i,picks:[]})
      } else {
        players.push({name:prompt(`Name of player ${i+1}.`),picks:[]})
      }
    }
  }
  const pickAreaWidth = width - pickAreaX
  const pickAreaHeight = height
  if (players.length > 21) {
    do {
      const wastedWidth = pickAreaHeight * thumbSize / 2 - (playerRows - 1 + 0) * thumbSize / 2 * thumbSize / 2 
      const wastedHeight = pickAreaWidth * thumbSize / 2 - (playerCols - 1 + 1) * thumbSize / 2 * thumbSize / 2
      if (wastedWidth < wastedHeight) {
        playerCols++
      } else if (wastedWidth === wastedHeight) {
        if (playerCols < playerRows) {
          playerCols++
        } else {
          playerRows++
        }
      } else {
        playerRows++
      }
      // console.log(`cols: ${playerCols}`)
      // console.log(`rows: ${playerRows}`)
      // console.log(`cols * rows: ${playerCols * playerRows}`)
      // console.log(`players: ${players.length}`)
    } while (playerCols * playerRows < players.length)
  } else {
    for (let i = 0; i < pickAreaConfigs.length; i++) {
      if (pickAreaConfigs[i].players >= players.length) {
        playerCols = pickAreaConfigs[i].player.cols
        playerRows = pickAreaConfigs[i].player.rows
        break
      }
    }
  }
  playerWidth = pickAreaWidth / playerCols - thumbSize / 2
  playerHeight = (pickAreaHeight + thumbSize / 2) / playerRows - thumbSize / 2
  pickSize = Math.min(thumbSize, playerWidth, playerHeight/2)
  pickCols = Math.floor(playerWidth/pickSize)
  pickRows = Math.floor(playerHeight/pickSize)-1
  maxPicks = Math.min(Math.floor(champImages.length/players.length),pickCols*pickRows);
  maxPicks = Math.min(maxPicks,prompt('How many picks each? Max: '+maxPicks+'.'))
  picksLeft = maxPicks*players.length
}

function draw() {
  background(50)
  // for (let i = 0; i < players.length; i++) {
  //   players[i].picks = 0
  // }
  for (let i = 0; i < champRows; i++) {
    for (let j = 0; j < champCols; j++) {
      const champNumber = i*champCols+j
      if (champNumber >= champImages.length) {
        break
      }
      const champDrawInfo = {}
      champDrawInfo.image = champImages[champNumber]
      champDrawInfo.x = j*thumbSize
      champDrawInfo.y = i*thumbSize
      champDrawInfo.thumb = true
      if (pickedChamps[champNumber]) {
        champDrawInfo.picked = true
      }
      champDraw(champDrawInfo)
    }
  }
  push()
  translate(pickAreaX, 0)
  for (let i = 0; i < playerRows; i++) {
    for (let j = 0; j < playerCols; j++) {
      const playerNumber = i*playerCols+j
      if (playerNumber >= players.length) {
        break
      }
      push()
      translate((playerWidth + pickSize / 2) * j + pickSize / 2, (playerHeight + pickSize / 2) * i)
      const rectInfo = {}
      rectInfo.x = 0
      rectInfo.y = 0
      rectInfo.w = playerWidth
      rectInfo.h = playerHeight
      // rectDraw(rectInfo)
      const playerDrawInfo = {}
      playerDrawInfo.name = players[playerNumber].name
      playerDrawInfo.picks = players[playerNumber].picks
      if (activePlayer === playerNumber) {
        playerDrawInfo.turn = true
      }
      playerDraw(playerDrawInfo)
      pop()
    }
  }
  pop()
}

function playerDraw(player) {
  push()
  textAlign(CENTER, CENTER)
  if (player.turn) {
    fill('red')
  } else {
    fill('white')
  }
  strokeWeight(3)
  textSize(pickSize*0.75)
  let tWidth = textWidth(player.name);
  if (tWidth > playerWidth) {
    let tSizeMod = playerWidth/tWidth;
    textSize(thumbSize*tSizeMod);
  }
  text(player.name,
    0,
    0,
    playerWidth,
    pickSize
  )
  pop()
  const sortedChamps = player.picks.sort(function(a, b){return a - b})
  // console.log(sortedChamps)
  const chunkedChamps = []
  for (let i = 0; i < sortedChamps.length; i += pickCols) {
    chunkedChamps.push(sortedChamps.slice(i, i + pickCols))
  }
  // console.log(chunkedChamps)
  for (let i = 0; i < chunkedChamps.length; i++) {
    const champsInRow = chunkedChamps[i].length
    const offset = (playerWidth - champsInRow * pickSize)/2
    push()
    translate(offset, (i + 1) * pickSize)
    for (let j = 0; j < chunkedChamps[i].length; j++) {
      const champDrawInfo = {}
      champDrawInfo.image = champImages[chunkedChamps[i][j]]
      champDrawInfo.x = pickSize * j
      champDrawInfo.y = 0
      champDraw(champDrawInfo)
    }
    pop()
  }

}

function champDraw(champ) {
  if (champ.thumb) {
    imgSize = thumbSize
  } else {
    imgSize = pickSize
  }
  image(champ.image,
    champ.x,
    champ.y,
    imgSize,
    imgSize,
  )
  if (champ.picked) {
    push()
    fill(50,50,50,200)
    rect(champ.x,
      champ.y,
      imgSize,
      imgSize,
    )
  }
}

function rectDraw(info) {
  push()
  stroke(255, 204, 0)
  strokeWeight(2)
  noFill()
  rect(info.x,
    info.y,
    info.w,
    info.h,
  )
  pop()
}

function mouseClicked() {
  // console.log(picksLeft)
  if (mouseX < thumbSize*champCols && picksLeft > 0) {
    const pickRow = Math.floor(mouseY/thumbSize)
    const pickCol = Math.floor(mouseX/thumbSize)
    const pickNumber = pickCol+pickRow*champCols
    // console.log(pickNumber)
    if (pickedChamps[pickNumber]) {
      console.log('picked')
    } else {
      pickedChamps[pickNumber] = true
      // console.log(pickedChamps)
      players[activePlayer].picks.push(pickNumber)
      activePlayer = (activePlayer + 1)%players.length
      picksLeft--
      if (picksLeft <= 0) {
        console.log('finished')
        activePlayer = -1
      }
    }
  } else if (picksLeft <= 0) {
    console.log('finished')
    activePlayer = -1
  }
}