// Central place for all landing-page copy and data.
// Edit this file to change the brand name, products, prices and text.

export const brand = {
  name: 'Axion Robotics',
  tagline: 'Smart machines for a connected world',
  email: 'hello@axionrobotics.example',
  location: 'Bengaluru, India',
}

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '12K+', label: 'Devices deployed' },
  { value: '99.9%', label: 'Cloud uptime' },
  { value: '40+', label: 'Cities served' },
  { value: '24/7', label: 'Remote monitoring' },
]

export const categories = ['All', 'IoT', 'Robotics', 'Kits']

export const products = [
  {
    id: 'sense-hub',
    name: 'SenseHub Pro',
    category: 'IoT',
    price: 129,
    badge: 'Bestseller',
    icon: 'hub',
    description: 'Wi-Fi + LoRa gateway that connects up to 200 sensors to the Axion Cloud.',
    specs: ['Wi-Fi 6 / LoRaWAN', 'Edge AI chip', 'PoE powered'],
  },
  {
    id: 'env-node',
    name: 'EnviroNode',
    category: 'IoT',
    price: 49,
    icon: 'sensor',
    description: 'Battery-powered temperature, humidity, air-quality and motion sensor.',
    specs: ['5-year battery', 'IP67 rated', '6 sensors in 1'],
  },
  {
    id: 'smart-relay',
    name: 'SmartRelay 4CH',
    category: 'IoT',
    price: 39,
    icon: 'relay',
    description: 'Control motors, pumps and lights remotely with scheduling and automations.',
    specs: ['4 × 10A channels', 'Energy metering', 'OTA updates'],
  },
  {
    id: 'rover-x',
    name: 'Rover X1',
    category: 'Robotics',
    price: 899,
    badge: 'New',
    icon: 'rover',
    description: 'Autonomous mobile robot for warehouses, farms and campus delivery.',
    specs: ['LiDAR navigation', '8h runtime', '25 kg payload'],
  },
  {
    id: 'arm-6',
    name: 'Axion Arm 6',
    category: 'Robotics',
    price: 1499,
    icon: 'arm',
    description: '6-axis desktop robotic arm with vision kit for pick-and-place and labs.',
    specs: ['0.1 mm repeatability', 'Python & ROS 2', 'Camera included'],
  },
  {
    id: 'starter-kit',
    name: 'Maker Starter Kit',
    category: 'Kits',
    price: 79,
    icon: 'kit',
    description: 'Everything students need to build their first connected robot in a weekend.',
    specs: ['30+ components', 'Step-by-step course', 'Ages 12+'],
  },
]

export const solutions = [
  {
    icon: 'factory',
    title: 'Smart Manufacturing',
    text: 'Monitor machines in real time, predict failures and cut downtime with connected sensors.',
  },
  {
    icon: 'leaf',
    title: 'Precision Agriculture',
    text: 'Soil, weather and irrigation automation that saves water and boosts yield.',
  },
  {
    icon: 'home',
    title: 'Smart Buildings',
    text: 'Energy, occupancy and air-quality insights for offices, campuses and homes.',
  },
  {
    icon: 'box',
    title: 'Logistics & Warehousing',
    text: 'Autonomous robots and asset tracking that move goods faster and safer.',
  },
  {
    icon: 'cloud',
    title: 'Axion Cloud',
    text: 'One dashboard for every device: live data, alerts, automations and APIs.',
  },
  {
    icon: 'cap',
    title: 'STEM Education',
    text: 'Hands-on robotics kits and curriculum for schools, colleges and makers.',
  },
]

export const steps = [
  { title: 'Choose', text: 'Pick off-the-shelf devices or tell us what you need built.' },
  { title: 'Connect', text: 'Plug in, scan the QR code and devices appear in Axion Cloud.' },
  { title: 'Automate', text: 'Set rules, dashboards and alerts — no code required.' },
  { title: 'Scale', text: 'Roll out from one site to hundreds with fleet management.' },
]

export const testimonials = [
  {
    quote:
      'The EnviroNodes paid for themselves in two months. We caught a cold-storage failure before we lost any stock.',
    name: 'Priya Sharma',
    role: 'Operations Lead, FreshCart',
  },
  {
    quote:
      'Rover X1 took over our night-shift material runs. Setup took a day, and the team actually loves it.',
    name: 'Daniel Okafor',
    role: 'Plant Manager, Kinetic Parts',
  },
  {
    quote:
      'Our students went from zero to a working line-following robot in one weekend with the Maker Kit.',
    name: 'Ananya Rao',
    role: 'STEM Coordinator, Horizon School',
  },
]

export const footerLinks = {
  Products: ['IoT Devices', 'Robots', 'Maker Kits', 'Axion Cloud'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Support: ['Docs', 'Warranty', 'Shipping', 'Contact'],
}
