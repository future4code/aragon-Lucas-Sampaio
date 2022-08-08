import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'
import { createPurchase } from './endpoints/createPurchase'
import { getUserPurchases } from './endpoints/getUserPurchases'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

// Exercício 1 - Create users
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

// Exercício 2 - Get users
constructor(
  id: string,
  email: string,
  name: string,
  password: string
) {
  
console.log("User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
      return this.id
  }

  public getEmail(): string {
      return this.email
  }

  public getName(): string {
      return this.name

  }
// Exercício 3 - Create product
app.post("/products", createProduct)

// Exercício 4 - Get products
app.get("/products", getProducts)

// Exercício 5 - Create purchase
app.post("/purchases", createPurchase)

// Exercício 6 - Get user purchases
app.get("/users/:id/purchases", getUserPurchases)