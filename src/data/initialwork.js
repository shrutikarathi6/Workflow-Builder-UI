import { generateId } from '../utils/idGenerator';

export const initialWorkflow = {
  id: generateId(),
  type: 'Start',
  label: 'Start',
  children: [],
};