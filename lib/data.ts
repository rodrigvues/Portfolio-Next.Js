import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { LiaUniversitySolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import converrcyImg from "@/public/converrcy.png";
import jogodavelhaImg from "@/public/jogodavelha.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "Sobre",
    hash: "/#sobre",
  },
  {
    name: "Projetos",
    hash: "/#projetos",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Trajetória",
    hash: "/#trajetoria",
  },
  {
    name: "Contato",
    hash: "/#contato",
  },
  {
    name: "Websites",
    hash: "/websites",
  },
] as const;

export const trajetoriaData = [
  {
    title: "Começo do Curso Técnico",
    location: "SENAI, Blumenau",
    description:
      "Começei o curso de desenvolvimento de sistemas que no inicio me ajudou muito com lógica de programação, design e até me introduziu a banco de dados. Usava Java, Portugol e Figma como principais ferramentas.",
    icon: React.createElement(LuGraduationCap),
    date: "02 / 2022",
  },
  {
    title: "BootCamp da Eliti",
    location: "AMcom, Blumenau",
    description:
      "Entrei no BootCamp de Next.Js da Eliti onde no período de um mês evolui muito. Sai do conhecimento básico de Front-end até o meu primeiro projeto em React e Next, o que em pouco tempo aumentou meu domínio nas linguagens e me influenciou a focar mais no Front-end. ",
    icon: React.createElement(RiNextjsLine),
    date: "11 - 12 / 2023",
  },
  {
    title: "INDUSPHERE",
    location: "SENAI, Blumenau",
    description:
      "Como um dos projetos finais do meu curso, minha turma produziu a INDUSPHERE, um sistema automatizado completo para a indústria têxtil , onde ajudei principalmente com o front-end (feito em React com TypeScript) e na modelagem do banco de dados. No final o projeto foi muito bem reconhecido no Mundo SENAI e me proporcionou muita experiência na criação de projetos, trabalho em grupos e método SCRUM. ",
    icon: React.createElement(LiaUniversitySolid),
    date: "05 - 08 / 2024",
  },
  {
    title: "Curso de Flutter - +Devs2Blu",
    location: "SENAI, Blumenau",
    description:
      "Fui escolhido para o grupo de 100 pessoas do programa da Blusoft com parceria da prefeitura, o +Devs2Blu, um curso de 480h que está melhorando muito minhas habilidades técnicas e pessoais.",
    icon: React.createElement(LuGraduationCap),
    date: "09 / 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Converrcy",
    description:
      "Conversor de moedas online totalmente funcional. No momento, meu principal projeto feito com CRA ( Create React App ).",
    tags: ["React", "TypeScript", "Figma", "Tailwind", "API"],
    imageUrl: converrcyImg,
    link: "https://github.com/rodrigvues/Converrcy-React"
  },
  {
    title: "Jogo da Velha",
    description:
      "Jogo da Velha produzido no bootcamp da ELITI que funcionou como minha ponte do React para Next.Js",
    tags: ["React", "TypeScript", "Next.js", "Vercel"],
    imageUrl: jogodavelhaImg,
    link: "https://github.com/rodrigvues/JogoDaVelha-Next.Js"
  },
  /*{
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },*/
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Java ( Lóg. de Programação )",
  "Git",
  "Figma",
] as const;

export const websitesData = [
  {
    title: "Converrcy",
    description:
      "Conversor de moedas online totalmente funcional. No momento, meu principal projeto feito com CRA ( Create React App ).",
    tags: ["React", "TypeScript", "Figma", "Tailwind", "API"],
    imageUrl: converrcyImg,
    link: "https://github.com/rodrigvues/Converrcy-React"
  },
  {
    title: "Jogo da Velha",
    description:
      "Jogo da Velha produzido no bootcamp da ELITI que funcionou como minha ponte do React para Next.Js",
    tags: ["React", "TypeScript", "Next.js", "Vercel"],
    imageUrl: jogodavelhaImg,
    link: "https://github.com/rodrigvues/JogoDaVelha-Next.Js"
  },
  {
    title: "Converrcy",
    description:
      "Conversor de moedas online totalmente funcional. No momento, meu principal projeto feito com CRA ( Create React App ).",
    tags: ["React", "TypeScript", "Figma", "Tailwind", "API"],
    imageUrl: converrcyImg,
    link: "https://github.com/rodrigvues/Converrcy-React"
  },
  /*{
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },*/
] as const;