import { Bot,Context } from "https://deno.land/x/grammy@v1.32.0/mod.ts";  
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Создайте экземпляр класса `Bot` и передайте ему токен вашего бота.  
export const bot = new Bot(Deno.env.get("BOT_TOKEN") || ""); // Убедитесь, что токен установлен  

/*

model User {
  id                     String              @id @default(cuid())
  createdAt              DateTime            @default(now())
  updatedAt              DateTime            @updatedAt
  name  String
  age Int
  tg_name String
  networking_points Int
  count_meetings Int
  city String
  rating Int
  meetings  UserMeeting[]
}
 */

async function createAge(ctx: Context) {
    ctx.reply("Сколько вам лет?"); 
    const age = Number(ctx.message!.text)
    if (age > 0) {
        return age;
    }
    else{
        ctx.reply("Пожалуйста, введите корректный возраст.");
        createAge(ctx) 
    }
}

async function createCity(ctx: Context) {
    ctx.reply("В каком городе вы живёте?"); 
    const city = ctx.message!.text
    return city;
}


async function createName(ctx: Context) {
    ctx.reply("Как вас зовут?"); 
    const name = ctx.message!.text
    return name;
}




async function register(userId : string ,tgName: string ,name: string ,age: number,city: string) {
    await prisma.user.create({
      data: {
        tgId: userId,
        name: name,
        age : age,
        tgName: tgName,
        city: city,
        meetings:{},
      },
    })
};

    
    
 

// Команды для регистрации  
/*async function getUserById(tgId: number,ctx: any) {
    try {
      const user = await prisma.user.findUnique({
        where: {
            tgId: tgId
        }
      });
      
      
      if (user) {
        ctx.reply('Здравствуйте! Для поиска собеседника введите /search');
        return user
      } else {
        ctx.reply('Добро пожаловать! Чтобы начать регистрацию, введите /register.');
        return []  
      }
    } catch (e) {
      ctx.reply('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      console.error(e);
    }
  }
  
*/

  bot.command("start", (ctx) => { 
    //const userId = ctx.from.id;
    //user = await getUserById(userId,ctx);
    ctx.reply('Привет! �� бот для поиска собеседников по кофеину. ��тобы начать поиск, введите /search');
  });  

bot.command("register", (ctx) => {  
    const userId = ctx.from!.id.toString()
    const TgName = ctx.from!.username!.toString()  

    // Обработка регистрации
    const name = createName(ctx).toString();
    const age =  Number(createAge(ctx));   
    const city =  createCity(ctx).toString();  

    register(userId,TgName,name,age,city)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)

        // Подтверждение данных  
        await ctx.reply(`Спасибо за регистрацию! Вот ваши данные:\n- Имя: ${name}\n- Возраст: ${age}\n- Город: ${city}`);   
});  
});

// Запуск бота  
await bot.start()
