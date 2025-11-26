(function() {
  const defaultDescription = 'Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.';

  const sections = [
    {
      id: 'menu-1',
      key: 'sectionOne',
      title: 'Section 1',
      defaultDescription,
      items: [
        { href: 'https://live.staticflickr.com/65535/54694397516_0652fdd6ef_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694397516_0652fdd6ef_b.jpg', title: 'Magna feugiat lorem' },
        { href: 'https://live.staticflickr.com/65535/54693590537_ab14c3ef07_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693590537_ab14c3ef07_b.jpg', title: 'Nisl adipiscing' },
        { href: 'https://live.staticflickr.com/65535/54694393861_c01f8315ec_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694393861_c01f8315ec_b.jpg', title: 'Tempus aliquam veroeros' },
        { href: 'https://live.staticflickr.com/65535/54693573522_a8f54faec0_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693573522_a8f54faec0_b.jpg', title: 'Aliquam ipsum sed dolore' },
        { href: 'https://live.staticflickr.com/65535/54694616108_7c7f754aa4_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694616108_7c7f754aa4_b.jpg', title: 'Cursis aliquam nisl' },
        { href: 'https://live.staticflickr.com/65535/54694645684_688b629d4b_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694645684_688b629d4b_b.jpg', title: 'Sed consequat phasellus' },
        { href: 'https://live.staticflickr.com/65535/54694730710_671067da1d_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694730710_671067da1d_b.jpg', title: 'Mauris id tellus arcu' },
        { href: 'https://live.staticflickr.com/65535/54694399526_f3e51746d4_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694399526_f3e51746d4_b.jpg', title: 'Nunc vehicula id nulla' },
        { href: 'https://live.staticflickr.com/65535/54694725225_a7fb90e95a_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694725225_a7fb90e95a_b.jpg', title: 'Neque et faucibus viverra' },
        { href: 'https://live.staticflickr.com/65535/54694664229_8761687a8f_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694664229_8761687a8f_b.jpg', title: 'Mattis ante fermentum' },
        { href: 'https://live.staticflickr.com/65535/54694642359_60eb467519_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694642359_60eb467519_b.jpg', title: 'Sed ac elementum arcu' },
        { href: 'https://live.staticflickr.com/65535/54694396636_492c9f7d7b_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694396636_492c9f7d7b_b.jpg', title: 'Vehicula id nulla dignissim' },
        { href: 'https://live.staticflickr.com/65535/54693569872_896cdc3d8d_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693569872_896cdc3d8d_b.jpg', title: 'Magna feugiat lorem' },
        { href: 'https://live.staticflickr.com/65535/54693573477_3b46de415b_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693573477_3b46de415b_b.jpg', title: 'Nisl adipiscing' },
        { href: 'https://live.staticflickr.com/65535/54694618133_1ab8983238_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694618133_1ab8983238_b.jpg', title: 'Tempus aliquam veroeros' },
        { href: 'https://live.staticflickr.com/65535/54694642689_24917f8176_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694642689_24917f8176_b.jpg', title: 'Aliquam ipsum sed dolore' },
        { href: 'https://live.staticflickr.com/65535/54694645669_365bb101a2_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694645669_365bb101a2_b.jpg', title: 'Cursis aliquam nisl' },
        { href: 'https://live.staticflickr.com/65535/54694617143_b32ab28495_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694617143_b32ab28495_b.jpg', title: 'Sed consequat phasellus' },
        { href: 'https://live.staticflickr.com/65535/54693573482_66c3200701_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693573482_66c3200701_b.jpg', title: 'Mauris id tellus arcu' },
        { href: 'https://live.staticflickr.com/65535/54693575667_331f12a347_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693575667_331f12a347_b.jpg', title: 'Nunc vehicula id nulla' },
        { href: 'https://live.staticflickr.com/65535/54694393561_b0229a8bc8_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694393561_b0229a8bc8_b.jpg', title: 'Neque et faucibus viverra' },
        { href: 'https://live.staticflickr.com/65535/54694728430_3be078a3d1_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694728430_3be078a3d1_b.jpg', title: 'Mattis ante fermentum' },
        { href: 'https://live.staticflickr.com/65535/54694645429_16d1d513c6_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694645429_16d1d513c6_b.jpg', title: 'Vehicula id nulla dignissim' },
        { href: 'https://live.staticflickr.com/65535/54694615053_75c24712b1_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694615053_75c24712b1_b.jpg', title: 'Textured light study' },
        { href: 'https://live.staticflickr.com/65535/54694397516_0652fdd6ef_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694397516_0652fdd6ef_b.jpg', title: 'Portrait drift one', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54693590537_ab14c3ef07_b.jpg', thumb: 'https://live.staticflickr.com/65535/54693590537_ab14c3ef07_b.jpg', title: 'Portrait drift two', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694645684_688b629d4b_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694645684_688b629d4b_b.jpg', title: 'Portrait drift three', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694730710_671067da1d_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694730710_671067da1d_b.jpg', title: 'Portrait drift four', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694399526_f3e51746d4_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694399526_f3e51746d4_b.jpg', title: 'Portrait drift five', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694664229_8761687a8f_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694664229_8761687a8f_b.jpg', title: 'Portrait drift six', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694393561_b0229a8bc8_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694393561_b0229a8bc8_b.jpg', title: 'Portrait drift seven', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694728430_3be078a3d1_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694728430_3be078a3d1_b.jpg', title: 'Portrait drift eight', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694615053_75c24712b1_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694615053_75c24712b1_b.jpg', title: 'Portrait drift nine', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694645429_16d1d513c6_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694645429_16d1d513c6_b.jpg', title: 'Portrait drift ten', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694725225_a7fb90e95a_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694725225_a7fb90e95a_b.jpg', title: 'Portrait drift eleven', portrait: true },
        { href: 'https://live.staticflickr.com/65535/54694617143_b32ab28495_b.jpg', thumb: 'https://live.staticflickr.com/65535/54694617143_b32ab28495_b.jpg', title: 'Portrait drift twelve', portrait: true }
      ]
    },
    {
      id: 'menu-2',
      key: 'sectionTwo',
      title: 'Section 2',
      defaultDescription,
      items: [
        { href: 'images/fulls/01.jpg', thumb: 'images/thumbs/01.jpg', title: 'Magna feugiat lorem' },
        { href: 'images/fulls/02.jpg', thumb: 'images/thumbs/02.jpg', title: 'Nisl adipiscing' },
        { href: 'images/fulls/03.jpg', thumb: 'images/thumbs/03.jpg', title: 'Tempus aliquam veroeros' },
        { href: 'images/fulls/04.jpg', thumb: 'images/thumbs/04.jpg', title: 'Aliquam ipsum sed dolore' },
        { href: 'images/fulls/05.jpg', thumb: 'images/thumbs/05.jpg', title: 'Cursis aliquam nisl' },
        { href: 'images/fulls/06.jpg', thumb: 'images/thumbs/06.jpg', title: 'Sed consequat phasellus' },
        { href: 'images/fulls/07.jpg', thumb: 'images/thumbs/07.jpg', title: 'Mauris id tellus arcu' },
        { href: 'images/fulls/08.jpg', thumb: 'images/thumbs/08.jpg', title: 'Nunc vehicula id nulla' },
        { href: 'images/fulls/09.jpg', thumb: 'images/thumbs/09.jpg', title: 'Neque et faucibus viverra' },
        { href: 'images/fulls/10.jpg', thumb: 'images/thumbs/10.jpg', title: 'Mattis ante fermentum' },
        { href: 'images/fulls/11.jpg', thumb: 'images/thumbs/11.jpg', title: 'Sed ac elementum arcu' },
        { href: 'images/fulls/12.jpg', thumb: 'images/thumbs/12.jpg', title: 'Vehicula id nulla dignissim' },
        { href: 'images/fulls/01.jpg', thumb: 'images/thumbs/01.jpg', title: 'Magna feugiat lorem' },
        { href: 'images/fulls/02.jpg', thumb: 'images/thumbs/02.jpg', title: 'Nisl adipiscing' },
        { href: 'images/fulls/03.jpg', thumb: 'images/thumbs/03.jpg', title: 'Tempus aliquam veroeros' },
        { href: 'images/fulls/04.jpg', thumb: 'images/thumbs/04.jpg', title: 'Aliquam ipsum sed dolore' },
        { href: 'images/fulls/05.jpg', thumb: 'images/thumbs/05.jpg', title: 'Cursis aliquam nisl' },
        { href: 'images/fulls/06.jpg', thumb: 'images/thumbs/06.jpg', title: 'Sed consequat phasellus' },
        { href: 'images/fulls/07.jpg', thumb: 'images/thumbs/07.jpg', title: 'Mauris id tellus arcu' },
        { href: 'images/fulls/08.jpg', thumb: 'images/thumbs/08.jpg', title: 'Nunc vehicula id nulla' },
        { href: 'images/fulls/09.jpg', thumb: 'images/thumbs/09.jpg', title: 'Neque et faucibus viverra' },
        { href: 'images/fulls/10.jpg', thumb: 'images/thumbs/10.jpg', title: 'Mattis ante fermentum' },
        { href: 'images/fulls/11.jpg', thumb: 'images/thumbs/11.jpg', title: 'Sed ac elementum arcu' },
        { href: 'images/fulls/12.jpg', thumb: 'images/thumbs/12.jpg', title: 'Vehicula id nulla dignissim' }
      ]
    }
  ];

  window.thumbnailsConfig = {
    defaultDescription,
    sections
  };
})();
