import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/", (req: Request, res: Response) => {
  res.send("Funcionou!");
})

// Exercício 2
type user = {
  id: string | number,
  name: string,
  phone: number,
  email: string,
  website: string
}

// Exercício 3
const users: Array<user> = [
  {
    id: 1,
    name: "Tchumi",
    phone: 31995961111,
    email: "batatinha@gmail.com",
    website: "tchumi.com"
  },
  {
    id: 2,
    name: "Mia",
    phone: 31995962222,
    email: "mia@gmail.com",
    website: "mia_linda.com"
  },
  {
    id: 3,
    name: "Baguera",
    phone: 31995963333,
    email: "panterinha@gmail.com",
    website: "baguera.com",
  },
  {
    id: 4,
    name: "Tom Hanks",
    phone: 31995964444,
    email: "tonico_lindo@gmail.com",
    website: "tonico.com"
  },
  {
    id: 5,
    name: "Whiskas",
    phone: 31995965555,
    email: "whiskas@gmail.com",
    website: "whiskas.com"
  },
  {
    id: 6,
    name: "Frajola",
    phone: 31995936666,
    email: "frajolinha@gmail.com",
    website: "frajolinha.com"
  },
]

// Exercício 4
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

// Exercício 5
type post = {
  id: string | number,
  title: string,
  body: string,
  userId: string | number
}
