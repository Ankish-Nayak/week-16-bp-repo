import { View } from "../elements";
import { useTheme } from "../Context";

// Note: this component currently explects `<ListItem>` children.
export const List: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const theme = useTheme();
  // @ts-ignore
  const isArray = children && children.length !== undefined;
  const childrenArray = isArray ? children : [children];
  const newChildrenArray: Array<React.ReactNode> = [];
  // @ts-ignore
  childrenArray.forEach((c, idx) => {
    newChildrenArray.push(c);
    // @ts-ignore
    if (idx !== childrenArray.length - 1) {
      newChildrenArray.push(<Divider />);
    }
  });
  return (
    <View
      style={{
        borderRadius: "12px",
        backgroundColor: theme.custom.colors.nav,
        ...style,
      }}
    >
      {newChildrenArray}
    </View>
  );
};

export const ListItem: React.FC<{
  children: Array<React.ReactNode> | React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <View
      style={{
        height: "44px",
        backgroundColor: "transparent",
        ...style,
      }}
    >
      {children}
    </View>
  );
};

function Divider() {
  const theme = useTheme();
  return (
    <View
      style={{
        height: "1px",
        backgroundColor: theme.custom.colors.border,
      }}
    ></View>
  );
}
