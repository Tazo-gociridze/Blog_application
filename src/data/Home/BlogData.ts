export interface BlogDataInterface {
  id: number
  title: string
  blogCreator: string
  createDate: string
  readTime: string
  description: string
}

export const BlogData: BlogDataInterface[] = [
  {
    id: Math.random(),
    title: 'lorem ipsum dolor',
    blogCreator: 'John Doe',
    createDate: 'May 15, 2023',
    readTime: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci omnis rem quia error facilis possimus esse ducimus, eos eaque at animi temporibus assumenda saepe consectetur, doloremque perspiciatis? Reiciendis.',
  },

  {
    id: Math.random(),
    title: 'lorem ipsum dolor 2',
    blogCreator: 'John Doe',
    createDate: 'May 15, 2023',
    readTime: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci omnis rem quia error facilis possimus esse ducimus, eos eaque at animi temporibus assumenda saepe consectetur, doloremque perspiciatis? Reiciendis.',
  },

  {
    id: Math.random(),
    title: 'lorem ipsum dolor 3',
    blogCreator: 'John Doe',
    createDate: 'May 15, 2023',
    readTime: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci omnis rem quia error facilis possimus esse ducimus, eos eaque at animi temporibus assumenda saepe consectetur, doloremque perspiciatis? Reiciendis.',
  },

  {
    id: Math.random(),
    title: 'lorem ipsum dolor 4',
    blogCreator: 'John Doe',
    createDate: 'May 15, 2023',
    readTime: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci omnis rem quia error facilis possimus esse ducimus, eos eaque at animi temporibus assumenda saepe consectetur, doloremque perspiciatis? Reiciendis.',
  },
]
