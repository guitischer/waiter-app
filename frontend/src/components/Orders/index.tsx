import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container} from './styles';

const orders: Order[] = [
  {
    '_id': '6372eee3af36f616f0dde306',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668475466939-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6372eee3af36f616f0dde307'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
