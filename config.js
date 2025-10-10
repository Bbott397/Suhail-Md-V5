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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_11_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY25HeW53TnJKMGtiWUViUWFvVkI2ZUlMbWU4Z0FFZmFHZXNDTGFKQUJLRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ0g2RDJGQTNRQjJjRlpWTGpmUG43Z1wiLFxuICBcInBob25lSWRcIjogXCJiZmFlMjU4OC03YTc4LTQ0YTItOTAwZS1hYjA3NTVhZjgwNzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjgsXG4gICAgICAxNjIsXG4gICAgICAxODMsXG4gICAgICA3LFxuICAgICAgMTQzLFxuICAgICAgMTk1LFxuICAgICAgNzMsXG4gICAgICAxNzYsXG4gICAgICAxMDIsXG4gICAgICAxMzgsXG4gICAgICAxODksXG4gICAgICAxMzUsXG4gICAgICAyLFxuICAgICAgMjI4LFxuICAgICAgNjQsXG4gICAgICAxMDUsXG4gICAgICAyNDAsXG4gICAgICAyMixcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgNCxcbiAgICAgIDE1LFxuICAgICAgMjA3LFxuICAgICAgMTIzLFxuICAgICAgMjM3LFxuICAgICAgMTQ2LFxuICAgICAgMjQ2LFxuICAgICAgMTk2LFxuICAgICAgMTg3LFxuICAgICAgMTgwLFxuICAgICAgNDksXG4gICAgICA5NixcbiAgICAgIDUxLFxuICAgICAgMTQ1LFxuICAgICAgMjExLFxuICAgICAgMTc4LFxuICAgICAgMjAwLFxuICAgICAgNjEsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUE8yKzRGRU5xTHBNY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdTUzhTa3BYSmRJQUNpR1NIMVdLOVl5SGJ2bUpQQStEQ2RjVG0ySEZKUmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVNRRGxZeWU0RlJtaWxrOFU1d1B0aTJDenU1K0VGOEM1bXEycGR6OUh0U1BZZW1UWFNEWTJEdjdHN1FYc0MvdUR1cEZiNHdjd284ZFNkQi90RmdLRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDFrN3RlTVBFTUtFT2hrc09GSUQxMEtMWVVYeFhoUU9BdDBObGlZWUhXSzBTWFpLdzRHZzZDTnd6bUk1WlRWcnlFMjlPU1hwQndIb2xDOHRIdCt2QlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE0MjM4ODA0OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA0NTEwMTM4ODYwOTA6NDdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0MjM4ODA0OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjAxMDE4NTVcbn0iCn0="  // PUT your SESSION_ID 


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
