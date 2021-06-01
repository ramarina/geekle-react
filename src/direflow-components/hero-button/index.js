import { DireflowComponent } from 'direflow-component';
import HeroButton from './HeroButton';

export default DireflowComponent.create({
  component: HeroButton,
  configuration: {
    tagname: 'hero-button',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
