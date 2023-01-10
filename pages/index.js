import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"

const Home = () => {
    return (
      <>
        <Layout>
          <section
            className='pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24'
            style={{
              backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
            }}
          >
            <div className='hidden md:block absolute top-0 left-0 mt-32'>
              <img
                className='h-64 lg:h-80 jump'
                src='/assets/imgs/illustrations/at_the_park.svg'
                alt='Cyber Turf'
              />
            </div>
            <div className='hidden md:block absolute top-0 right-0 mt-32'>
              <img
                className='h-64 lg:h-80 jump'
                src='/assets/imgs/illustrations/delivered.svg'
                alt='Cyber Turf'
              />
            </div>
            <div className='container'>
              <div className='mt-12 mb-12 text-center'>
                <div className='max-w-2xl mx-auto mb-8'>
                  <h2 className='text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn'>
                    Committed to People <br />
                    Committed{' '}
                    <span className='text-blue-500'>to the Future</span>
                  </h2>
                  <p className='text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn'>
                    We are <strong className='text-blue-500'>Cyber Turf</strong>
                    , a Career Design{' '}
                    <span className='typewrite d-inline text-brand'>
                      <TextEffect text1='Web Agency' text2='' />
                    </span>
                  </p>
                </div>
                <div className='max-w-2xl mx-auto text-center'>
                  <div className='flex flex-wrap'>
                    <div className='flex flex-1 mb-4 mr-4 px-4 rounded bg-blueGray-50'>
                      <svg
                        className='h-6 w-6 my-auto mr-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewbox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                      </svg>
                      <input
                        className='w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none'
                        type='email'
                        placeholder='Type your e-mail'
                      />
                    </div>
                    <div className='flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50'>
                      <svg
                        className='h-6 w-6 my-auto mr-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewbox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      <input
                        className='w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none'
                        type='email'
                        placeholder='Password'
                      />
                    </div>
                    <div className='w-full lg:w-auto'>
                      <a
                        className='block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded'
                        href='#'
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='py-12'>
            <div className='container py-12 mx-auto'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 order-1 md:order-0'>
                  <div className='max-w-md'>
                    <h3
                      className='mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      How we work?
                    </h3>
                    <p
                      className='mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn'
                      data-wow-delay='.5s'
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed luctus eget justo et iaculis.
                    </p>
                    <ul>
                      <li
                        className='py-4 wow animate__animated animate__fadeIn'
                        data-wow-delay='.7s'
                      >
                        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>
                          1
                        </span>
                        <span>Expand Your Reach</span>
                      </li>
                      <li
                        className='py-4 wow animate__animated animate__fadeIn'
                        data-wow-delay='.9s'
                      >
                        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>
                          2
                        </span>
                        <span>Annualized Growth</span>
                      </li>
                      <li
                        className='pt-4 wow animate__animated animate__fadeIn'
                        data-wow-delay='.11s'
                      >
                        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>
                          3
                        </span>
                        <span>Book Your Providers</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <section
                  className='py-20 xl:bg-contain bg-top bg-no-repeat'
                  style={{
                    backgroundImage:
                      "url('assets/imgs/backgrounds/intersect.svg')",
                  }}
                  id='key-features'
                >
                  <div className='container'>
                    <div className='max-w-lg mx-auto mb-12 text-center'>
                      <h2
                        className='my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn'
                        data-wow-delay='.1s'
                      >
                        We Consultant to Get <br />
                        <span className='text-blue-500'>Our Business</span> Plan
                      </h2>
                      <p
                        className='text-blueGray-400 leading-loose wow animate__animated animate__fadeIn'
                        data-wow-delay='.3s'
                      >
                        Business solution company sit our any how site used the
                        our company any site us it-solve theme is very
                        professional
                      </p>
                    </div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.3s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            IT Consultancy
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.5s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Web Development
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.7s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            App Development
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.9s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
                              ></path>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Cloud Solution
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            From migration to a brand new setup, we cater to all
                            you Cloud needs. Now your tech can scale as fast as
                            your customer base.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.3s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Right Solutions
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.5s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Responsive Site
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.7s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Architecture and Platforms
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We can help you establish platforms and Tech
                            Architecture which can enable your company to
                            utilise most out of your existing services.
                          </p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
                        <div
                          className='border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn'
                          data-wow-delay='.9s'
                        >
                          <div className='text-blue-500 mx-auto mb-4'>
                            <svg
                              className='w-8 h-8 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                              ></path>
                            </svg>
                          </div>
                          <h3 className='mb-2 font-bold font-heading'>
                            Process Research
                          </h3>
                          <p className='text-sm text-blueGray-400'>
                            We believe brand interaction is key to
                            communication. Real innovations and positive
                            customer experience are the heart of success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  className='w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__animated animate__fadeIn'
                  data-wow-delay='.5s'
                >
                  <img
                    className='sm:max-w-sm lg:max-w-full mx-auto'
                    src='/assets/imgs/illustrations/podcast.svg'
                    alt='Cyber Turf'
                  />
                </div>
              </div>
            </div>
          </section>

          <section className='bg-gray-50'>
            <div className='container'>
              <div className='flex flex-wrap lg:flex-nowrap'>
                <div className='flex flex-wrap lg:max-w-sm mx-auto'>
                  <img
                    className='jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn'
                    data-wow-delay='.5s'
                    src='/assets/imgs/illustrations/tasks.svg'
                    alt='Cyber Turf'
                  />
                </div>
                <div className='w-full lg:w-auto'>
                  <div className='lg:pl-32'>
                    <div className='mb-4'>
                      <span
                        className='text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeIn'
                        data-wow-delay='.1s'
                      >
                        Why choose us
                      </span>
                      <h2
                        className='text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn'
                        data-wow-delay='.3s'
                      >
                        Key Features
                      </h2>
                    </div>
                    <div
                      className='flex items-start py-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.5s'
                    >
                      <div className='w-8 mr-5 text-blue-500'>
                        <svg
                          className='w-8 h-8'
                          fill='none'
                          stroke='currentColor'
                          viewbox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold font-heading'>
                          Expand Your Reach
                        </h3>
                        <p className='text-blueGray-400 leading-loose'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veritatis expedita animi.
                        </p>
                      </div>
                    </div>
                    <div
                      className='flex items-start py-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.7s'
                    >
                      <div className='w-8 mr-5 text-blue-500'>
                        <svg
                          className='w-8 h-8'
                          fill='none'
                          stroke='currentColor'
                          viewbox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold font-heading'>
                          Annualized Growth
                        </h3>
                        <p className='text-blueGray-400 leading-loose'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veritatis expedita animi.
                        </p>
                      </div>
                    </div>
                    <div
                      className='flex items-start py-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.9s'
                    >
                      <div className='w-8 mr-5 text-blue-500'>
                        <svg
                          className='w-8 h-8'
                          fill='none'
                          stroke='currentColor'
                          viewbox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold font-heading'>
                          Book Your Providers
                        </h3>
                        <p className='text-blueGray-400 leading-loose'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veritatis expedita animi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class='py-20'>
            <div class='container'>
              <div class='max-w-2xl mx-auto text-center'>
                <div class='max-w-md mb-8 mx-auto '>
                  <span
                    class='text-sm text-blueGray-400 wow animate__animated animate__fadeIn'
                    data-wow-delay='.1s'
                  >
                    Contact Us
                  </span>
                  <h2
                    class='mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn'
                    data-wow-delay='.3s'
                  >
                    We will <span class='text-blue-500'>be glad</span> to hear
                    from you!
                  </h2>
                </div>
                <div>
                  <form>
                    <div
                      class='mb-4 text-sm wow animate__animated animate__fadeIn'
                      data-wow-delay='.5s'
                    >
                      <span class='mr-4 font-semibold'>Departament:</span>
                      <label class='mr-4'>
                        <input
                          class='mr-1'
                          type='radio'
                          name='department'
                          value='1'
                          checked=''
                        />
                        <span>Support</span>
                      </label>
                      <label>
                        <input
                          class='mr-1'
                          type='radio'
                          name='department'
                          value='2'
                        />
                        <span>Sales</span>
                      </label>
                    </div>
                    <div
                      class='mb-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <input
                        class='w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none'
                        type='text'
                        placeholder='Subject'
                      />
                    </div>
                    <div
                      class='mb-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <input
                        class='w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none'
                        type='text'
                        placeholder='Name'
                      />
                    </div>
                    <div
                      class='mb-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <input
                        class='w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none'
                        type='email'
                        placeholder='name@example.com'
                      />
                    </div>
                    <div
                      class='mb-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <textarea
                        class='w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none'
                        placeholder='Message...'
                      ></textarea>
                    </div>
                    <div
                      class='mb-4 wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <label class='flex px-2 bg-blueGray-50 rounded'>
                        <input class='hidden' type='file' name='Choose file' />
                        <span class='my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer'>
                          {' '}
                          Browse
                        </span>
                      </label>
                    </div>
                    <div
                      class='flex justify-between items-center wow animate__animated animate__fadeIn'
                      data-wow-delay='.3s'
                    >
                      <label>
                        <input
                          class='mr-1'
                          type='checkbox'
                          name='terms'
                          value='1'
                        />
                        <span class='text-sm font-semibold'>
                          I agree to terms and conditions.
                        </span>
                      </label>
                      <button
                        class='py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section class='py-20 bg-blueGray-50'>
            <div class='container'>
              <div class='max-w-lg mx-auto mb-12 text-center'>
                <span
                  class='inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn'
                  data-wow-delay='.3s'
                >
                  Our Team
                </span>
                <h2
                  class='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn'
                  data-wow-delay='.3s'
                >
                  Meet our awesome team
                </h2>
                <p
                  class='text-blueGray-400 leading-loose wow animate__animated animate__fadeIn'
                  data-wow-delay='.3s'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
              <div class='flex flex-wrap'>
                <div
                  class='w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn'
                  data-wow-delay='.1s'
                >
                  <div class='px-6 py-10 bg-white shadow rounded'>
                    <div class='flex items-center mb-4'>
                      <img
                        class='h-16 w-16 rounded-full object-cover'
                        src='assets/imgs/placeholders/img-1.png'
                        alt='Cyber Turf'
                      />
                      <div class='pl-4'>
                        <p class='text-lg font-bold'>Michael Jackson</p>
                        <p class='text-blue-600'>CEO</p>
                      </div>
                    </div>
                    <p class='leading-loose text-blueGray-400 mb-5 text-sm'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                    <div class='flex space-x-2'>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/facebook-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/instagram-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class='w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn'
                  data-wow-delay='.3s'
                >
                  <div class='px-6 py-10 bg-white shadow rounded'>
                    <div class='flex items-center mb-4'>
                      <img
                        class='h-16 w-16 rounded-full object-cover'
                        src='assets/imgs/placeholders/img-2.jpg'
                        alt='Cyber Turf'
                      />
                      <div class='pl-4'>
                        <p class='text-lg font-bold'>Oprah Winfrey</p>
                        <p class='text-blue-600 text-sm'>Head of Development</p>
                      </div>
                    </div>
                    <p class='leading-loose text-blueGray-400 mb-5 text-sm'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                    <div class='flex space-x-2'>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/facebook-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/instagram-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class='w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn'
                  data-wow-delay='.5s'
                >
                  <div class='px-6 py-10 bg-white shadow rounded'>
                    <div class='flex items-center mb-4'>
                      <img
                        class='h-16 w-16 rounded-full object-cover'
                        src='assets/imgs/placeholders/img-5.jpg'
                        alt='Cyber Turf'
                      />
                      <div class='pl-4'>
                        <p class='text-lg font-bold'>Leonardo</p>
                        <p class='text-blue-600 text-sm'>Head of Operations</p>
                      </div>
                    </div>
                    <p class='leading-loose text-blueGray-400 mb-5 text-sm'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                    <div class='flex space-x-2'>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/facebook-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/twitter-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class='w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn'
                  data-wow-delay='.7s'
                >
                  <div class='px-6 py-10 bg-white shadow rounded'>
                    <div class='flex items-center mb-4'>
                      <img
                        class='h-16 w-16 rounded-full object-cover'
                        src='assets/imgs/placeholders/img-6.png'
                        alt='Cyber Turf'
                      />
                      <div class='pl-4'>
                        <p class='text-lg font-bold'>Jerry Seinfeld</p>
                        <p class='text-blue-600 text-sm'>Head of Development</p>
                      </div>
                    </div>
                    <p class='leading-loose text-blueGray-400 mb-5 text-sm'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                    <div class='flex space-x-2'>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/facebook-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/instagram-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='assets/imgs/icons/twitter-blue.svg'
                          alt='Cyber Turf'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
};

export default Home;