import React from "react";
import Image from 'next/image';

const styles = {
  card: "bg-white border",
  summary: "px-4 py-2 border-gray-100 bg-gray-50 border-t",
  title: "block text-lg text-gray-900 truncate",
  category: "block text-sm text-3xl text-gray-500 bg-gray-100 px-2 py-1 rounded-full",
  image: {
    aspect: "aspect-h-1 aspect-w-1",
    content: "object-center object-cover",
  },
};

import { Product } from "@/saleor/api";

type Props = Pick<Product, "id" | "name" | "thumbnail" | "category">;

export const ProductElement = ({ id, name, thumbnail, category }: Props) => {
  return (
    <li key={id} className={'bg-red-500 border text-4xl'}>
      <a>
        <div className={styles.image.aspect}>
          <Image src={thumbnail?.url as string} alt="" className={styles.image.content} layout='fill' />
        </div>
        <div className={'px-4 py-2 border-gray-100 bg-gray-50 border-t'}>
          <p className={'bg-red-500'}>{name}</p>
          <p className={styles.category}>{category?.name}</p>
        </div>
      </a>
    </li>
  );
};
