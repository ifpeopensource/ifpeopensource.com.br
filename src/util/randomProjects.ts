import type { IProject } from '../components/HomeSections/Projects';

/**
 * A função randomProjects recebe uma lista de projetos e retorna n projetos
 * aleatórios
 */

export default function randomProjects(projectList: IProject[]): IProject[] {
  // Quantidade de projetos selecionados
  let n = 3;
  // Array que ira armazenar os projetos selecionados
  const projects = new Array(n);
  let len = projectList.length;
  // Array que armazena os projetos já selecionados para evitar repetição
  const taken = new Array(len);
  if (len < n) {
    throw new RangeError(
      `randomProjects: a lista de projetos tem menos de ${n} projetos`
    );
  }
  // eslint-disable-next-line no-param-reassign
  while (n--) {
    const x = Math.floor(Math.random() * len);
    projects[n] = projectList[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return projects;
}
