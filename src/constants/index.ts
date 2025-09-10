import networks from './NETWORKS.json';
import experience from './EXPERIENCE.json';

interface Network {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}
interface Experience {
  readonly company: "Comunidad IT",
  readonly role: "Programming Instructor",
  readonly period: "2022 - 2023",
  readonly initials: "IT"
}

export const NETWORKS = networks as Network[];
export const EXPERIENCE = experience as Experience[];
