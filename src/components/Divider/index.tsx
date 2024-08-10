import { View } from 'react-native';
interface DividerProps {
  space?: number;
}
export const Divider = ({ space = 10 }: DividerProps) => {
  return <View style={{ marginTop: space }}></View>;
};
