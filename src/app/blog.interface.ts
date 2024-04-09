export interface Blog {
    _id?: string;
    title?: string;
    userName?: string;    
    description?: string;
    category?: 'Sports' | 'Entertainment' | 'Business' | 'Health';
    
  }