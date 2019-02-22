import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import headImg from '../../assets/headImg.png';
import arrow from '../../assets/icon-arrow.png';
import banner1 from '../../assets/img-banner1.png';
import banner2 from '../../assets/img-banner2.png';
import banner3 from '../../assets/img-banner3.png';
import logoList1 from '../../assets/logo-list1.png';
import logoList2 from '../../assets/logo-list2.png';
import './Style.css';

export default class Home extends Component {

  componentDidMount () {

    new Swiper(this.swiperID, {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: false,
      clickable: true,
      pagination: {
        el: this.paginateID,
        clickable: true,
      },
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.headContentBox}>
          <img src={headImg} style={styles.headImg} />
          <div style={styles.headContent}>
            <div style={styles.headContentTitle}>米粒生活</div>
            <div style={styles.headContentText}>购物省钱·分享赚钱</div>
            <div style={styles.headTextBox}>
              <div style={styles.headText}>社交分享电商新浪潮</div>
              <div style={styles.headText}>汇聚海量优惠券</div>
              <div style={styles.headText}>淘宝、天猫商品低至1折</div>
            </div>
            <div style={styles.codeScanBtn}>
              <div style={styles.codeScanText}>扫描右侧二维码下载</div>
              <img src={arrow} style={styles.codeScanIcon} />
            </div>
          </div>
        </div>
        <div className="swiper-container" style={styles.swiperContainer} ref={self => this.swiperID = self}>
          <div className="swiper-wrapper" style={styles.swiperWrapper}>
            <div className="swiper-slide" style={styles.swiperSlide}>
              <img src={banner1} style={styles.swiperImg} />
            </div>
            <div className="swiper-slide" style={styles.swiperSlide}>
              <img src={banner2} style={styles.swiperImg} />
            </div>
            <div className="swiper-slide" style={styles.swiperSlide}>
              <img src={banner3} style={styles.swiperImg} />
            </div>
          </div>
          <div style={styles.paginate} ref={self => this.paginateID = self} />
        </div>
        <div style={styles.logoWallBox}>
          <div style={styles.wallTitle}>强大的股东背景</div>
          <img src={logoList1} style={styles.logoList} />
          <div style={styles.wallTextBox}>
            <div style={styles.line} />
            <div style={styles.wallText}>他们投资过的公司即米粒的合作伙伴有</div>
            <div style={styles.line} />
          </div>
          <img src={logoList2} style={styles.logoList} />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: '84px',
    width: '100%',
  },
  headImg: {
    height: '600px',
    width: '100%',
    display: 'block',
  },
  headContentBox: {
    position: 'relative',
  },
  headContent: {
    position: 'absolute',
    top: '160px',
    left: '160px',
  },
  headContentTitle: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '40px',
    color: '#fff',
    marginBottom: '15px',
  },
  headContentText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '24px',
    color: '#fff',
    marginBottom: '20px',
  },
  headTextBox: {
    marginBottom: '40px',
  },
  headText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#fff',
  },
  codeScanBtn: {
    width: '298px',
    height: '56px',
    borderRadius: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
  },
  codeScanText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '20px',
    color: '#FC4277',
    marginRight: '5px',
  },
  codeScanIcon: {
    width: '23px',
    height: '18px',
  },
  swiperContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  swiperWrapper: {
    width: '100%',
  },
  swiperSlide: {
    width: '100%',
  },
  swiperImg: {
    width: '100%',
    height: '600px',
    display: 'block',
  },
  paginate: {
    position: 'absolute',
    bottom: '10px',
    left: '48%',
    zIndex: 999,
  },
  logoWallBox: {
    background: '#fff',
    padding: '90px 0'
  },
  wallTitle: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '36px',
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
    marginBottom: '40px',
  },
  logoList: {
    height: '100px',
    width: 'auto',
    display: 'block',
    margin: '0 auto'
  },
  wallTextBox: {
    margin: '60px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '18px',
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
    margin: '0 20px',
  },
  line: {
    height: '1px',
    width: '386px',
    background: '#ddd',
  },
}