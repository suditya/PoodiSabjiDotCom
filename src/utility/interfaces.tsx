export interface ICartItems {
  items: ICartProps[];
}

export interface IPlusMinus {
  quantity: number;
}

export interface ICartProps {
  src: string;
  description: string;
  title: string;
  price: string;
  quantity: number;
}
