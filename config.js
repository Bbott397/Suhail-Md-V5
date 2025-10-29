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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_00_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkh0OEE2L0tiMEtScHU5RVVEbzVhT2VsMTB4c2taMDMySzEzUUtIc0lBQWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJmTXJHS2I3UWtTWE5BeVB4bVplMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjA5Njg4MTAtMzU1Yy00NjUzLWI1NmUtNmQ0MWI0ZDU4NzU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDI0NixcbiAgICAgIDE3NixcbiAgICAgIDEyNixcbiAgICAgIDE2OCxcbiAgICAgIDQ3LFxuICAgICAgMTY2LFxuICAgICAgNTUsXG4gICAgICAyMzIsXG4gICAgICAxNzUsXG4gICAgICAxNDUsXG4gICAgICAxOSxcbiAgICAgIDIwMCxcbiAgICAgIDE4NixcbiAgICAgIDM1LFxuICAgICAgMTMsXG4gICAgICAxODksXG4gICAgICA2MyxcbiAgICAgIDk4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMjE5LFxuICAgICAgODksXG4gICAgICA1MSxcbiAgICAgIDU3LFxuICAgICAgMTQzLFxuICAgICAgMjM0LFxuICAgICAgMTc1LFxuICAgICAgMjM1LFxuICAgICAgMTExLFxuICAgICAgMTM0LFxuICAgICAgMjMzLFxuICAgICAgODAsXG4gICAgICAxNSxcbiAgICAgIDQxLFxuICAgICAgNDQsXG4gICAgICA0MyxcbiAgICAgIDIwMyxcbiAgICAgIDIxMyxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVyaEo0TEVKcVRoOGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2cUdhQ0UzeUtGWCtkRDNWOFlpdVNBSWFNS0k2ZXN6VHBhTmtQZW44ckU4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFKUGU1R1FGMlVDM2h3M1V6WnQ3VUhGN3JDYmM3TVBjaTJBaEJwdnIxQnQ3LzJaVHYwZWdNUVZJb0JqUm5XYnpRZ2pCRDYrQSs3SW9LTWo0YlZmdkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRwOXJYdmlnblVTQS9CeU12ZnA4M1dYNVFyanU2WVpGYU5wMU03WWxZUVBYTXIzV2VCRmJBa3R3ZWZmbE9sNVdaa05wV3pjbmpLdXhjMTVYNlI4b0F3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDIzODgwNDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwNDUxMDEzODg2MDkwOjUyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNDIzODgwNDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc2MTcyNDgzMVxufSIKfQ=="  // PUT your SESSION_ID 


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
