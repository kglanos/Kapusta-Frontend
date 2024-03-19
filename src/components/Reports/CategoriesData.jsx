import { ReactComponent as Products } from '../../icons/Group 62.svg';
import { ReactComponent as Alcohol } from '../../icons/cocktail 1.svg';
import { ReactComponent as Entertaiment } from '../../icons/kite 1.svg';
import { ReactComponent as Health } from '../../icons/hands-holding-heart 1.svg';
import { ReactComponent as Car } from '../../icons/car 1.svg';
import { ReactComponent as Housing } from '../../icons/couch 1.svg';
import { ReactComponent as Technique } from '../../icons/tools 1.svg';
import { ReactComponent as Communication } from '../../icons/invoice 1.svg';
import { ReactComponent as SportsHobbies } from '../../icons/clay 1.svg';
import { ReactComponent as Education } from '../../icons/book 1.svg';
import { ReactComponent as Other } from '../../icons/ufo 1.svg';

export const categoriesData = [
  {
    name: 'Products',
    icon: Products,
    items: [
      { name: 'Fruits', value: 1 },
      { name: 'Vegetables', value: 1 },
      { name: 'Meat', value: 1 },
      { name: 'Dairy', value: 1 },
      { name: 'Beverages', value: 1 },
      { name: 'Bread', value: 1 },
      { name: 'Snacks', value: 1 },
      { name: 'Canned Goods', value: 1 },
      { name: 'Frozen Foods', value: 1 },
      { name: 'Spices', value: 1 },
      { name: 'Condiments', value: 1 },
      { name: 'Pasta', value: 1 },
      { name: 'Rice', value: 1 },
      { name: 'Cereal', value: 1 },
    ],
  },
  {
    name: 'Alcohol',
    icon: Alcohol,
    items: [
      { name: 'Vodka', value: 1 },
      { name: 'Wine', value: 1 },
      { name: 'Wisky', value: 1 },
      { name: 'Beer', value: 1 },
    ],
  },
  {
    name: 'Entertainment',
    icon: Entertaiment,
    items: [
      { name: 'Concerts', value: 0 },
      { name: 'Movies', value: 0 },
      { name: 'Games', value: 0 },
    ],
  },
  {
    name: 'Health',
    icon: Health,
    items: [
      { name: 'Medications', value: 1 },
      { name: 'Doctor Visits', value: 1 },
      { name: 'Dental Care', value: 1 },
      { name: 'Gym Memberships', value: 1 },
      { name: 'Health Supplements', value: 1 },
      { name: 'Medical Equipment', value: 1 },
    ],
  },
  {
    name: 'Transport',
    icon: Car,
    items: [
      { name: 'Fuel', value: 1 },
      { name: 'Public Transport', value: 1 },
      { name: 'Car Maintenance', value: 1 },
      { name: 'Parking Fees', value: 1 },
      { name: 'Tolls', value: 1 },
      { name: 'Car Insurance', value: 1 },
    ],
  },
  {
    name: 'Housing',
    icon: Housing,
    items: [
      { name: 'Rent', value: 1 },
      { name: 'Mortgage', value: 1 },
      { name: 'Utilities', value: 1 },
      { name: 'Property Taxes', value: 1 },
      { name: 'Home Insurance', value: 1 },
      { name: 'Maintenance', value: 1 },
    ],
  },
  {
    name: 'Technique',
    icon: Technique,
    items: [
      { name: 'Electronics', value: 1 },
      { name: 'Gadgets', value: 1 },
      { name: 'Computer Accessories', value: 1 },
      { name: 'Software', value: 1 },
      { name: 'Tech Services', value: 1 },
      { name: 'Upgrades', value: 1 },
    ],
  },
  {
    name: 'Communal, Communication',
    icon: Communication,
    items: [
      { name: 'Phone Bills', value: 1 },
      { name: 'Internet Subscription', value: 1 },
      { name: 'Postal Services', value: 1 },
      { name: 'Community Events', value: 1 },
      { name: 'Social Clubs', value: 1 },
      { name: 'Networking Events', value: 1 },
      { name: 'Meetups', value: 1 },
    ],
  },
  {
    name: 'Sports, Hobbies',
    icon: SportsHobbies,
    items: [
      { name: 'Football', value: 1 },
      { name: 'Basketball', value: 1 },
      { name: 'Running', value: 1 },
      { name: 'Swimming', value: 1 },
      { name: 'Cycling', value: 1 },
      { name: 'Chess', value: 1 },
      { name: 'Photography', value: 1 },
    ],
  },
  {
    name: 'Education',
    icon: Education,
    items: [
      { name: 'Books', value: 1 },
      { name: 'Courses', value: 1 },
      { name: 'Workshops', value: 1 },
      { name: 'Tutorials', value: 1 },
      { name: 'Online Classes', value: 1 },
      { name: 'Seminars', value: 1 },
      { name: 'Webinars', value: 1 },
      { name: 'Lectures', value: 1 },
    ],
  },
  {
    name: 'Other',
    icon: Other,
    items: [{ name: 'Other', value: 0 }],
  },
];
