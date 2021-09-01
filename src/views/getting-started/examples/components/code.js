const code =
`import "vui-design/dist/style/vui-design.css";
import {
  // General
  Icon,
  ButtonGroup,
  Button,
  // Layout
  Divider,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Space,
  // Navigation
  Affix,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownSubmenu,
  DropdownMenuItem,
  DropdownMenuItemGroup,
  DropdownMenuDivider,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  MenuDivider,
  PageHeader,
  Pagination,
  Steps,
  Step,
  Tabs,
  TabPanel,
  // Data Entry
  Cascader,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Form,
  FormGroup,
  FormItem,
  Input,
  InputGroup,
  InputNumber,
  MutexGroup,
  Radio,
  RadioGroup,
  Rate,
  Select,
  Option,
  OptionGroup,
  Slider,
  Switch,
  Textarea,
  Timeroutine,
  Transfer,
  CascadeTransfer,
  Upload,
  // Data Display
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardGrid,
  CardMeta,
  Cell,
  CellGroup,
  Collapse,
  Countdown,
  Panel,
  Descriptions,
  Description,
  Empty,
  Image,
  List,
  ListItem,
  ListItemMeta,
  Popover,
  Qrcode,
  Ratio,
  Statistic,
  Table,
  Tag,
  Time,
  Timeline,
  TimelineItem,
  Tooltip,
  Tree,
  // Feedback
  Watermark,
  Alert,
  Drawer,
  Message,
  Modal,
  Notice,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  Spin,
  // Other
  Anchor,
  AnchorLink,
  Backtop,
  Loading,
  Fullscreen,
  TransitionCollaps
} from "vui-design";

// General
Vue.use(Icon);
Vue.use(ButtonGroup);
Vue.use(Button);
// Layout
Vue.use(Divider);
Vue.use(Row);
Vue.use(Col);
Vue.use(Layout);
Vue.use(Header);
Vue.use(Sider);
Vue.use(Content);
Vue.use(Footer);
Vue.use(Space);
// Navigation
Vue.use(Affix);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(DropdownButton);
Vue.use(DropdownMenu);
Vue.use(DropdownSubmenu);
Vue.use(DropdownMenuItem);
Vue.use(DropdownMenuItemGroup);
Vue.use(DropdownMenuDivider);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(MenuDivider);
Vue.use(PageHeader);
Vue.use(Pagination);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tabs);
Vue.use(TabPanel);
// Data Entry
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Datepicker);
Vue.use(Form);
Vue.use(FormGroup);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputGroup);
Vue.use(InputNumber);
Vue.use(MutexGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Rate);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Slider);
Vue.use(Switch);
Vue.use(Textarea);
Vue.use(Timeroutine);
Vue.use(Transfer);
Vue.use(CascadeTransfer);
Vue.use(Upload);
// Data Display
Vue.use(Avatar);
Vue.use(AvatarGroup);
Vue.use(Badge);
Vue.use(Card);
Vue.use(CardGrid);
Vue.use(CardMeta);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Collapse);
Vue.use(Panel);
Vue.use(Countdown);
Vue.use(Descriptions);
Vue.use(Description);
Vue.use(Empty);
Vue.use(Image);
Vue.use(List);
Vue.use(ListItem);
Vue.use(ListItemMeta);
Vue.use(Popover);
Vue.use(Qrcode);
Vue.use(Ratio);
Vue.use(Statistic);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Time);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Tooltip);
Vue.use(Tree);
// Feedback
Vue.use(Watermark);
Vue.use(Alert);
Vue.use(Drawer);
Vue.use(Message);
Vue.use(Modal);
Vue.use(Notice);
Vue.use(Popconfirm);
Vue.use(Progress);
Vue.use(Result);
Vue.use(Skeleton);
Vue.use(Spin);
// Other
Vue.use(Anchor);
Vue.use(AnchorLink);
Vue.use(Backtop);
Vue.use(Loading);
Vue.use(Fullscreen);
Vue.use(TransitionCollapse);

Vue.prototype.$notice = Notice;
Vue.prototype.$message = Message;
Vue.prototype.$modal = Modal;
Vue.prototype.$spin = Spin;
Vue.prototype.$loading = Loading;`;

export default code;