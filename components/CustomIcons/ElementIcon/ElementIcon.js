import React from 'react';
import { useTheme } from '@mui/styles';
import * as _ from 'lodash'
import Image from 'next/image';

const elementIcons = [
  { name: 'dodatki', path: '/icons/001-cooking-equipment.svg' },
  { name: 'spodnica', path: '/icons/001-skirt.svg' },
  { name: 'sweter', path: '/icons/002-sweater.svg' },
  { name: 'bron', path: '/icons/002-weapons.svg' },
  { name: 'kostium', path: '/icons/003-superhero.svg' },
  { name: 'hełm', path: '/icons/003-viking-helmet.svg' },
  { name: 'jednoczesciowy', path: '/icons/004-suit.svg' },
  { name: 'maska', path: '/icons/004-theater.svg' },
  { name: 'buty', path: '/icons/005-shoes.svg' },
  { name: 'nakrycie-glowy', path: '/icons/006-pamela.svg' },
  { name: 'zbroja', path: '/icons/007-armor.svg' },
  { name: 'suknia', path: '/icons/008-dress.svg' },
  { name: 'koszulka', path: '/icons/009-shirt.svg' },
  { name: 't-shirt', path: '/icons/010-tshirt.svg' },
  { name: 'spodnie', path: '/icons/trousers.svg' },
];

export default function ElementIcon(props) {
  const theme = useTheme();
  const src = _.find(elementIcons, { name: props.url })?.path || '/icons/004-suit.svg';
  const width = props.width ? props.width + 'px' : '25px';
  const height = props.width ? props.width + 'px' : '25px';
  const color = props?.color || theme.palette.grey[700];
  const title = props?.title || 'kostiumy'

  return (
    <Image src={src} height={height} width={width} color={color} title={title} />
  );
}


