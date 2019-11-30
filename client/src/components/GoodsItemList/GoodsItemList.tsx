import * as React from 'react';
import styles from './GoodsItemList.scss';
import { IGoodsBase } from '../../types/Goods';
import { GoodsItem } from '../UI/GoodsItem';

const mockGoods = [
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  {
    id: 149505401,
    title: "Смартфон Oukitel C10, серый ",
    availability: true,
    price: 4490,
    finalPrice: 2790,
    category: "Smartphones",
    availableInDays: 0,
    brand: "Oukitel",
    brandId: 148322664,
    quantity: 28,
    imageUrl: "/images/149505401.jpg",
    parameters: [
      {
        "title": "RAM",
        "value": "8"
      },
      {
        "title": "SSD",
        "value": "512"
      },
      {
        "title": "OS",
        "value": "Windows 10 Home"
      },
      {
        "title": "Diagonal",
        "value": "12.5\u0022"
      },
      {
        "title": "Resolution",
        "value": "1366x768"
      }
    ]
  },
  
];

export interface IGoodsItemListProps {
  goods: IGoodsBase[];
}

export const GoodsItemList: React.FC<IGoodsItemListProps> = ({ goods }) => {
  return (
    <div className={styles['container']}>
      {mockGoods.map(({ id, title, brand, price, finalPrice, imageUrl, parameters}) => (
        <GoodsItem
          key={id}
          title={title}
          brandName={brand}
          price={price}
          finalPrice={finalPrice}
          imgSrc={imageUrl}
          parameters={parameters}
        />
      ))}
    </div>
  );
};
