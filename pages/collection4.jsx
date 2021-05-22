import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'


export default function Collection4() {
  const [filtersSidebar, setfiltersSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <section className="colln-hero">
        <div className="container colln-hero__container">
          <div className="colln-hero__content">
            <h1 className="colln-hero__title">Accent Chairs</h1>
            <div className="nav-indicator">
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name">Home</span>
                <img
                  src="./png/ico-right-grey.png"
                  alt="icon right"
                  className="nav-indicator__item-icon"
                />
              </div>
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name">Collection</span>
                <img
                  src="./png/ico-right-grey.png"
                  alt="icon right"
                  className="nav-indicator__item-icon"
                />
              </div>
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name nav-indicator__item-name--active">
                  Chair Name
                </span>
              </div>
            </div>
          </div>
          <div className="colln-hero__img-cont">
            <img
              src="./png/colln-hero-pic.png"
              className="colln-hero__img"
              alt="image"
            />
          </div>
        </div>
      </section>
      <section className="colln4-main">
        {filtersSidebar ? (
          <div className="colln4-main__filters-cont-wrapper" onClick={() => setfiltersSidebar(false)} >
            <div className="colln4-main__filters-cont">
              <div className="colln4-main__filters-cont-item">
                <h3 className="colln4-main__filters-cont-item-title">
                  Product Categories
                </h3>
                <ul className="colln4-main__filters-cont-select-filters">
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">All Categories</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">Minimal</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">Armchairs</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">Accent Chairs</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">Recliner Chairs</label>
                  </li>
                </ul>
              </div>
              <div className="colln4-main__filters-cont-item">
                <h3 className="colln4-main__filters-cont-item-title">Price</h3>
                <ul className="colln4-main__filters-cont-select-filters">
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">$0 - $30</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">$100 - $500</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">$500 - $1000</label>
                  </li>
                  <li className="colln4-main__filters-cont-select-filter">
                    <input type="checkbox" id="age1" name="age" value="30" />
                    <label htmlFor="age1">$1000 - $5000</label>
                  </li>
                </ul>
              </div>
              <div className="colln4-main__filters-cont-item  colln4-main__filters-cont-item-products">
                <h3 className="colln4-main__filters-cont-item-title">
                  Best Selling
                </h3>
                <div className="colln4-main__filters-cont-products">
                  <div className="colln4-main__filters-cont-product">
                    <div className="colln4-main__filters-cont-product-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="colln4-main__filters-cont-product-img"
                        alt="chair"
                      />
                    </div>
                    <div className="colln4-main__filters-cont-product-content">
                      <h5 className="colln4-main__filters-cont-product-name">
                        Minimal Chair Black
                      </h5>
                      <span className="colln4-main__filters-cont-product-price">
                        $600
                      </span>
                    </div>
                  </div>
                  <div className="colln4-main__filters-cont-product">
                    <div className="colln4-main__filters-cont-product-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="colln4-main__filters-cont-product-img"
                        alt="chair"
                      />
                    </div>
                    <div className="colln4-main__filters-cont-product-content">
                      <h5 className="colln4-main__filters-cont-product-name">
                        Minimal Chair Black
                      </h5>
                      <span className="colln4-main__filters-cont-product-price">
                        $600
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="container">
          <div className="colln4-main__actions">
            <button className="colln4-main__actions-filter-btn" onClick={() => setfiltersSidebar(true)}>
              <img src="./svg/filter.svg" alt="filter" />
              <span className="colln4-main__actions-filter-btn-text">
                Filter
              </span>
            </button>
          </div>
          <div className="colln4-main__row">
            <div className="colln4-main__row-item">
              <div className="colln4-main__products">
                <div className="products-grid-colln4">
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>

                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>

                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>

                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>

                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="colln4-main__products-end">
                  <div className="colln4-main__products-end-design"></div>
                  <div className="colln4-main__products-end-text">
                    That's it for Accent Chairs
                  </div>
                  <div className="colln4-main__products-end-design"></div>
                </div>
              </div>
              <div className="colln4-main__recomm">
                <h2 className="heading heading-section">
                  <span className="heading-section__top">
                    What you might like
                  </span>
                  <span className="heading-section__main">Similar Items</span>
                </h2>
                <div className="products-grid-colln4">
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>{' '}
                  <div className="products-grid-colln4__item">
                    <Link href="/product">
                      <div className="product-preview">
                        <div className="product-preview__img-cont">
                          <img
                            src="./png/product.png"
                            alt=""
                            className="product-preview__img"
                          />
                        </div>
                        <h4 className="product-preview__name">
                          Orla Kiely Laurel Walnut Feet
                        </h4>
                        <h5 className="product-preview__price">$290</h5>
                      </div>
                    </Link>
                  </div>{' '}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
