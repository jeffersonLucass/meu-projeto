# 📘 Anotações do Projeto

## 👥 Integrantes

- Nome: Gustavo Mendonça Scot
- Nome: Grazielly de Almeida Sabino
- Nome: Jefferson Lucas Alves Rodrigues
- Nome: Kaion Brandão Lima

## 📺 Referência

Vídeo: [Criando uma API REST com NestJS](https://www.youtube.com/watch?v=dFFpjjD9cj4)

---

## 📝 Índice de Tópicos

1. [Introdução](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
2. [Criando o Projeto](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
3. [Criando a API com o Gerador de Código](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
4. [Validação de Dados](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
5. [TypeORM e SQLite](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
6. [Injeção de Dependência](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
7. [Lógica na Service](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
8. [Bônus: Boas Práticas REST](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
9. [Próximos Passos](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)
10. [Desafio!](https://www.notion.so/Introdu-o-ao-NestJS-1d2aa0d469bc80df97cff7aa6bb8480d?pvs=21)

---

## 📌 Introdução

O vídeo apresenta a criação de uma API REST utilizando o framework NestJS, abordando desde a configuração inicial até a implementação de boas práticas.

---

## ⚙️ Criando o Projeto

Comando para criar um novo projeto NestJS:

```bash
npm i -g @nestjs/cli
nest new nome-do-projeto

```

Comando para instalação dos pacotes:

```bash
npm i nanoid@3 slite3 typeorm @nestjs/typeorm class-validator class-transforer 
```

## 🛠️ Criando a API com o Gerador de Código

```bash
nest g resource developers 
```

Colocando o projeto para “rodar”:

```bash
npm run start: dev
```

O autor recomenda a instalação da extensão “Rest Client”

![image.png](attachment:1d8e37e1-cd1e-488d-99bf-18f52388da79:image.png)

Na pasta developers deve ser criado outro arquivo “developers.http” onde deverá ser feito:

```tsx
GET http://localhost:3000/developers
```

**Create developer** 

```tsx
POST http://localhost:3000/developers
```

**Update developer**

```tsx
PATCH  http://localhost:3000/developers
```

**Delete developer**

```tsx
DELETE http://localhost:3000/developers
```

## ✅ Validação de Dados

Na classe `CreateDeveloperDto`

```tsx
import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateDeveloperDto{
@IsString()
name: string;

@IsEmail()
email: string;

@IsDateString()
dateOfBirth: string;
}
```

Para habilitar esse comportamento, vá no arquivo `Main`:

```tsx
app.useGlobalPipes(
	new ValidationPipe({
		transform: true,
		whitelist: true,
	}),
	);
```

Retornando no Create Developer, no bloco POST:

```tsx
POST http://localhost:3000/developers
Contet-Type: application/json

{
		"name": "João",
		"email": "joao.doe@gmail.com",
		"dateOfBirth": "1990-01-01"

}
```

## 🗄️ TypeORM e SQLite, configurando banco de dados e criando tabelas

Configuração no `app.module.ts`:

```tsx
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DevelopersModule,
  ],
})
export class AppModule {}

```

Configuração no `developers.module.ts` :

```tsx
@Module({
	imports: [TypeOrmModule.forFeature([Developer])],
	controllers: [DevelopersController],
	providers: [DevelopersService],
})
```

Configuração no `developer.entity.ts` :

```tsx
const{nanoid} = require("nanoid)

	@Entity('developers')
	export class Developer{
	
	@PrimaryColumn()
	id : string; 
	
	@Column()
	name: string;
	
	@Column()
	email: string;
	
	@Column()
	dateOfBirth: string;
	
	@BeforeInsert()
	generateId() {
			this.id = 'dev_$(nanoid())';
	}
}
```

## 💉 Injeção de Dependência

Utilização do sistema de injeção de dependência do NestJS para gerenciar serviços e repositórios.

No `developer.service.ts`

```tsx
constructor(
	@InjectRepository(Developer)
	private readonly repository: Repository<Developer>
)
```

## 🧠 Lógica na Service

Implementação da lógica de negócios nos serviços, mantendo os controladores focados no tratamento das requisições e respostas.

Para criar um desenvolvedor no banco de dados, no `developer.service.ts`

```tsx
create(dto: CreateDeveloperDto){
	const developer = this.repository.create(dto);
	return this.repository.save(developer);
}
```

Em `findAll`, exclui a linha 

```tsx
return `This action returns all developers`;
```
E adiciona em seu lugar

```tsx
return this.repository.find();
```

Em `findOne`, faz-se o mesmo processo adicionando

```tsx
findOne(id : string){
	return this.repository.findOneBy({id});
}
```

Lembre-se de trocar todos para string: `update,remove`

Em `update`

```tsx
async update(id: string, dto: UpdateDeveloperDto){
	const developer = awaitthis.repository.findOneBy({id});
	if (!developer) return null;
	this.repository.merge(developer,dto);
	return this.repository.save(developer);
}
```

Em `remove`

```tsx
async remove(id: string){
	const developer = awaitthis.repository.findOneBy({id});
	if (!developer) return null;
	return this.repository.remove(developer);
}
```

Em `developers.controller.ts`, dentro de @GET, @PATCH e @DELETE, exlui-se o + de (+id)

```tsx
return.this.developerService.findOne(id)
return.this.developerService.upatade(id)
return.this.developerService.remove(id)
```

Em `developers.service.ts`, para evitar erro de compilação, adicione em @Injectable() dentro de constructor()

```tsx
 @InjectRepository(Developer)
```

## 🌟 Bônus: Boas Práticas REST

- Utilização adequada dos métodos HTTP (GET, POST, PUT, DELETE).
- Estruturação clara das rotas.
- Tratamento apropriado de erros e respostas.

Em `developers.controller.ts`, dentro de @Delete

```tsx
@Delete(':id')
@HttpCode(204)
```

No caso do **findOne, Update e Remove:**

Serão assíncronos (``) 
```tsx
@Get(':id')
async findOne...

@Patch(':id')
async upatade...

@Delete(':id')
@HttpCode(204)
async remove...
```

e ao invés de retornar direto será 

```tsx
const developer = await this… 
if (!developer) throw new NotFoundException();
```

## 🚀 Próximos Passos

- Implementar autenticação e autorização.
- Adicionar testes automatizados.
- Integrar com outros serviços ou bancos de dados.

---

## 🎯 Desafio!

Como desafio, é proposto ler a documentação do NestJS.

## 📃 Documentação NestJs

[Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/)
