export interface Blog {
    id?: string;
    title?: string;
    userName?: string;    
    description?: string;
    category?: 'Sports' | 'Entertainment' | 'Business' | 'Health';
    status?: 'Updated' | 'Added';
  }