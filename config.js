const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.react_status = process.env.AUTO_REACT_STATUS || "true"
global.like_status = process.env.AUTO_LIKE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349114238804,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_03_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkp5Q2V4VmoxMkxzUUFjZFhiU0FsWXFqcHdZc0cvTzBCZGM5QmM5YlRsND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzNHb2wtYTRTaldyOThHUHliOFZZQVwiLFxuICBcInBob25lSWRcIjogXCIzMDEyM2U5Yy01OWEwLTQ2ZDUtYmM0Ni03NTNlNjdjYzI5YmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTg3LFxuICAgICAgMjAyLFxuICAgICAgODgsXG4gICAgICAxMTAsXG4gICAgICAxNzYsXG4gICAgICAxNjEsXG4gICAgICAxMyxcbiAgICAgIDIyNSxcbiAgICAgIDE5OCxcbiAgICAgIDExLFxuICAgICAgNzEsXG4gICAgICAyMzksXG4gICAgICA5LFxuICAgICAgMTA4LFxuICAgICAgMTA1LFxuICAgICAgODIsXG4gICAgICAyMzQsXG4gICAgICA0OCxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAyMTYsXG4gICAgICAyMDcsXG4gICAgICAyMTcsXG4gICAgICAyMCxcbiAgICAgIDE3NixcbiAgICAgIDgxLFxuICAgICAgNzUsXG4gICAgICAzNSxcbiAgICAgIDI3LFxuICAgICAgODcsXG4gICAgICAxNjksXG4gICAgICA2OCxcbiAgICAgIDEzNixcbiAgICAgIDE2MixcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICA1NSxcbiAgICAgIDgxLFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5PdjI0UTdNSEt4d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYNzlkUm91bnAwS0FJeW93VE8rUGhiSm9obnhqTEppdExYYlljWDR4SEc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndCYWlBUmNHakZsSS8yaTRoaExSMFpjWlk5MGZmWGU5NlNVOUwyRHFlaXA5blN3M2dUdDlBeGZWbmNkVmw3NGQwbk9kelRDQjRtampvYjlVNFNFcURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE0Y2xOOHpRM3ExTXhrMUNSNU5KMVd6UkJuNHUwVWI5ajhWYjMwK09ZSnpGSE15NnE1M1JiR2pKZytuRlJnNVpLVW1wT2Faaklab2VsSzhUeSsyWkR3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDIzODgwNDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwNDUxMDEzODg2MDkwOjUwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNDIzODgwNDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjA3MzEzNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw4SS5qc29uIjogIntcImtleURhdGFcIjpcImVrVVc2UmtYVTZncmJzVDZ3V3NBYmZId29aUW1KeWxrM3NNWklSUnZWZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMxNzI4OTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NjA3MzEzNzgzNTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
