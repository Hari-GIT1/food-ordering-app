export interface Order {
    id: number;
    items: any[];
    total: number;
    status: 'placed' | 'preparing' | 'ready' | 'completed';
  }