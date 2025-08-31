// const observer = new MutationObserver(() => {
//   const targets = document.querySelectorAll(".product-details__product-share");
  
//   targets.forEach((target) => {
//     // Check if banner already added to prevent duplicates
//     if (!target.dataset.bannerAdded) {
//       const html = `
//         <div class="trust-banner" style="display:flex;justify-content:space-between;width:100%;gap:10px;margin-bottom:15px;padding:15px;border:1px solid #e0e0e0;border-radius:8px;background-color:#f9f9f9;">
//           <div style="display:flex;flex-direction:column;gap:8px;flex:1;justify-content:space-between;">
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
//               <!-- Truck Icon -->
//               <svg role="img" width="25" height="25" viewBox="0 0 63 50" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="Delivery Truck">
//                 <title>Delivery Truck Icon</title>
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2001 4.93328H31.5001C34.1142 4.93328 36.2334 7.05247 36.2334 9.66662L36.2334 26.2333H5.46673V9.66662C5.46673 7.05247 7.58592 4.93328 10.2001 4.93328ZM5.46673 30.9666L36.2334 30.9666L36.2334 35.6999H24.2805C22.7865 34.2359 20.7404 33.3333 18.4834 33.3333C16.2264 33.3333 14.1803 34.2359 12.6863 35.6999H10.2001C7.58592 35.6999 5.46673 33.5808 5.46673 30.9666ZM38.6001 40.4333H26.6828C26.7381 40.8198 26.7667 41.2148 26.7667 41.6166C26.7667 46.1914 23.0582 49.8999 18.4834 49.8999C13.9086 49.8999 10.2001 46.1914 10.2001 41.6166C10.2001 41.2148 10.2287 40.8198 10.284 40.4333H10.2001C4.97177 40.4333 0.733398 36.1949 0.733398 30.9666V9.66662C0.733398 4.43832 4.97177 0.199951 10.2001 0.199951H31.5001C35.9112 0.199951 39.6176 3.21692 40.6685 7.29995L45.6977 7.29995C45.6985 7.29995 45.6993 7.29995 45.7001 7.29995C45.7008 7.29995 45.7016 7.29995 45.7024 7.29995H46.9597C48.3757 7.29993 49.6344 7.2999 50.704 7.38062C51.8055 7.46376 52.8886 7.64203 53.9092 8.0956C56.0671 9.05468 57.2677 10.9431 58.4669 13.3415C60.4094 17.2266 61.7148 20.6434 62.1453 21.9349L62.2667 22.2992V32.15C62.2667 34.3287 61.7152 36.1418 60.6093 37.5387C59.6835 38.7081 58.505 39.4142 57.3423 39.8393C57.4674 40.4119 57.5334 41.0065 57.5334 41.6166C57.5334 46.1914 53.8248 49.8999 49.2501 49.8999C44.6753 49.8999 40.9667 46.1914 40.9667 41.6166C40.9667 41.2148 40.9953 40.8198 41.0506 40.4333H40.9667H38.6001ZM40.9667 35.7H43.4529C44.9469 34.2359 46.9931 33.3333 49.2501 33.3333C51.4577 33.3333 53.4637 34.1969 54.9485 35.6048C55.1051 35.5735 55.2572 35.5371 55.4041 35.4952C56.1161 35.2917 56.5889 34.9914 56.8981 34.6007C57.1974 34.2227 57.5334 33.5212 57.5334 32.15L57.5334 26.2333H48.0667C45.4526 26.2333 43.3334 24.1141 43.3334 21.5V12.0333H40.9667V35.7ZM48.0667 12.0351V21.5H56.9371C56.3306 19.9666 55.4089 17.8097 54.2333 15.4584C53.0658 13.1235 52.4914 12.6452 51.9868 12.421C51.6761 12.2829 51.2061 12.1653 50.3477 12.1005C49.7228 12.0534 48.9893 12.0393 48.0667 12.0351ZM10.2001 12.0333C10.2001 10.7262 11.2597 9.66662 12.5667 9.66662H29.1334C30.4405 9.66662 31.5001 10.7262 31.5001 12.0333C31.5001 13.3404 30.4405 14.4 29.1334 14.4H12.5667C11.2597 14.4 10.2001 13.3404 10.2001 12.0333ZM12.5667 16.7666C11.2597 16.7666 10.2001 17.8262 10.2001 19.1333C10.2001 20.4404 11.2597 21.5 12.5667 21.5H29.1334C30.4405 21.5 31.5001 20.4404 31.5001 19.1333C31.5001 17.8262 30.4405 16.7666 29.1334 16.7666H12.5667ZM18.4834 45.1666C20.444 45.1666 22.0334 43.5772 22.0334 41.6166C22.0334 39.656 20.444 38.0666 18.4834 38.0666C16.5228 38.0666 14.9334 39.656 14.9334 41.6166C14.9334 43.5772 16.5228 45.1666 18.4834 45.1666ZM52.8001 41.6166C52.8001 43.5772 51.2107 45.1666 49.2501 45.1666C47.2895 45.1666 45.7001 43.5772 45.7001 41.6166C45.7001 39.656 47.2895 38.0666 49.2501 38.0666C51.2107 38.0666 52.8001 39.656 52.8001 41.6166Z"/>
//               </svg>
//               <strong>Tracked Shipping on All Orders</strong>
//             </span>
            
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
//               <!-- Secure Payments Icon -->
//               <svg viewBox="0 0 25 25" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Secure Payments">
//                 <path d="M21.3491 13.3835V9.84456C21.3491 9.37526 21.1627 8.92518 20.8309 8.59334C20.499 8.26149 20.0489 8.07507 19.5797 8.07507H2.76949C2.30019 8.07507 1.85012 8.26149 1.51827 8.59334C1.18643 8.92518 1 9.37526 1 9.84456V22.231C1 22.7003 1.18643 23.1504 1.51827 23.4822C1.85012 23.8141 2.30019 24.0005 2.76949 24.0005H19.5797C20.0489 24.0005 20.499 23.8141 20.8309 23.4822C21.1627 23.1504 21.3491 22.7003 21.3491 22.231V17.8073M6.9101 3.65134L16.9431 1.03249C17.0559 1.00073 17.1739 0.992135 17.29 1.00723C17.4062 1.02233 17.5181 1.06081 17.6189 1.12034C17.7198 1.17987 17.8076 1.25923 17.8769 1.35361C17.9463 1.448 17.9958 1.55546 18.0225 1.66951L18.518 3.65134" stroke="#004aad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M23.1186 13.3833H18.6949C18.2063 13.3833 17.8102 13.7794 17.8102 14.268V16.9223C17.8102 17.4109 18.2063 17.807 18.6949 17.807H23.1186C23.6073 17.807 24.0034 17.4109 24.0034 16.9223V14.268C24.0034 13.7794 23.6073 13.3833 23.1186 13.3833Z" stroke="#004aad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//               <strong>Secure Payments</strong>
//             </span>
            
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
//               <!-- Fast Delivery Icon -->
//               <svg xmlns="http://www.w3.org/2000/svg" fill="#004aad" height="25" width="25" viewBox="0 0 422.518 422.518" aria-label="Fast Delivery">
//                 <path d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"/>
//               </svg>
//               <strong>Fast Delivery</strong>
//             </span>
//           </div>
          
//           <div style="display:flex;flex-direction:column;gap:8px;flex:0.8;justify-content:space-between;">
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
//               <!-- Headphones Icon -->
//               <svg role="img" width="25" height="25" viewBox="0 0 476 476" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="24/7 Support">
//                 <title>Customer Support Icon</title>
//                 <g><path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z"/></g>
//               </svg>
//               <strong>24/7 Customer Support</strong>
//             </span>
            
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px;">
//               <!-- Returns Icon -->
//               <svg role="img" width="20" height="20" viewBox="0 0 20 20" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="Returns Policy">
//                 <title>Return Product Arrow Icon</title>
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1H2C1.44772 1 1 1.44772 1 2V18C1 18.5523 1.44772 19 2 19H16V20H2C0.895431 20 0 19.1046 0 18V2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V12H19V2C19 1.44772 18.5523 1 18 1ZM7 4.5C7 4.22386 7.22386 4 7.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H7.5C7.22386 5 7 4.77614 7 4.5ZM13.8535 11.8536C14.0488 11.6583 14.0488 11.3417 13.8535 11.1464C13.6582 10.9512 13.3417 10.9512 13.1464 11.1464L10.2928 14L13.1464 16.8536C13.3417 17.0488 13.6582 17.0488 13.8535 16.8536C14.0488 16.6583 14.0488 16.3417 13.8535 16.1464L12.2071 14.5H15.5C17.8223 14.5 19 15.8653 19 17V19.5C19 19.7761 19.2239 20 19.5 20C19.7761 20 20 19.7761 20 19.5V17C20 15.1347 18.1777 13.5 15.5 13.5H12.2071L13.8535 11.8536Z"/>
//               </svg>
//               <strong>14-Day Returns</strong>
//             </span>
            
//             <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px;">
//               <!-- Warehouse Icon -->
//               <svg xmlns="http://www.w3.org/2000/svg" fill="#004aad" height="25" width="25" viewBox="0 0 512 512" aria-label="UK Warehouse">
//                 <g><g><path d="M499.933,163.855L260.501,1.383c-2.716-1.845-6.284-1.844-9.002,0L12.067,163.855c-2.199,1.492-3.516,3.976-3.516,6.634v333.495c0,4.427,3.589,8.017,8.017,8.017h478.864c4.428,0,8.017-3.589,8.017-8.017V170.489C503.449,167.831,502.133,165.347,499.933,163.855z M196.676,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V495.967z M92.994,205.228v-18.171h326.013v18.171H92.994z M144.301,444.66v-35.273h18.171v35.273H144.301z M196.676,393.353h-26.188h-34.205h-26.188v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V393.353z M144.301,342.046v-35.273h18.171v35.273H144.301z M299.29,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.428,0,8.017-3.589,8.017-8.017v-43.29h18.171V495.967z M246.914,444.66v-35.273h18.171v35.273H246.914z M487.416,495.967h-69.478V324.409c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v171.557h-86.58V401.37c0-4.427-3.588-8.017-8.017-8.017H212.71v-94.597c0-4.427-3.589-8.017-8.017-8.017h-94.597v-69.478h291.808v68.944c0,4.427,3.588,8.017,8.017,8.017c4.428,0,8.017-3.589,8.017-8.017v-68.944h9.086c4.428,0,8.017-3.589,8.017-8.017V179.04c0-4.427-3.588-8.017-8.017-8.017H84.977c-4.427,0-8.017,3.589-8.017,8.017v34.205c0,4.427,3.589,8.017,8.017,8.017h9.086v274.706H24.585V174.737L256,17.705l231.415,157.032V495.967z"/></g></g>
//               </svg>
//               <strong>UK Warehouse Delivery</strong>
//             </span>
//           </div>
//         </div>
//       `;

//       // Insert banner before the target element
//       target.insertAdjacentHTML('beforebegin', html);
      
//       // Mark this target as processed
//       target.dataset.bannerAdded = 'true';
//     }
//   });
// });

// // Start observing with more specific configuration
// const productPageContainer = document.querySelector(".ec-store__product-page");
// if (productPageContainer) {
//   observer.observe(productPageContainer, {
//     childList: true,
//     subtree: true
//   });
// } else {
//   // Fallback: wait for page to load
//   document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector(".ec-store__product-page");
//     if (container) {
//       observer.observe(container, {
//         childList: true,
//         subtree: true
//       });
//     }
//   });
// }


/**
 * Adds a guaranteed section under .product-details-module__content
 * Following best practices: error handling, performance, accessibility, and maintainability
 */
/**
 * Adds a guaranteed section under .product-details-module__content
 * Following best practices: error handling, performance, accessibility, and maintainability
 */

class GuaranteedSectionManager {
  constructor(options = {}) {
    this.options = {
      targetSelector: '.product-details__sidebar',
      sectionId: 'guaranteed-section',
      className: 'guaranteed-section',
      retryAttempts: 5,
      retryDelay: 500,
      ...options
    };
    
    this.isInitialized = false;
    this.observer = null;
  }

  /**
   * Initialize the guaranteed section injection
   */
  async init() {
    if (this.isInitialized) {
      console.warn('GuaranteedSectionManager already initialized');
      return;
    }

    try {
      // First, let's debug what elements are available
      this.debugAvailableElements();
      
      await this.waitForTarget();
      this.injectSection();
      this.setupMutationObserver();
      this.isInitialized = true;
      console.log('Guaranteed section successfully initialized');
    } catch (error) {
      console.error('Failed to initialize guaranteed section:', error);
      console.log('Attempting fallback initialization...');
      this.tryFallbackInit();
    }
  }

  /**
   * Debug helper to show available elements
   */
  debugAvailableElements() {
    console.log('🔍 Debugging available elements:');
    
    // Check for common product detail selectors
    const commonSelectors = [
      '.product-details__sidebar',
      '.product-details',
      '.product-info',
      '.product-content',
      '[class*="product-detail"]',
      '[class*="product-info"]',
      '[class*="product-content"]',
      '.content',
      '.main-content',
      '#product-details',
      '#product-info'
    ];

    const foundElements = [];
    
    commonSelectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
          foundElements.push({ selector, count: elements.length });
        }
      } catch (e) {
        // Invalid selector, skip
      }
    });

    if (foundElements.length > 0) {
      console.log('✅ Found potential target elements:', foundElements);
    } else {
      console.log('❌ No common product detail elements found');
      console.log('📋 All elements with "product" in class name:');
      const allProductElements = document.querySelectorAll('[class*="product"]');
      Array.from(allProductElements).forEach((el, index) => {
        if (index < 10) { // Limit output
          console.log(`   ${el.tagName}.${el.className}`);
        }
      });
    }
  }

  /**
   * Try fallback initialization with alternative selectors
   */
  tryFallbackInit() {
    const fallbackSelectors = [
      '.product-details',
      '.product-info',
      '.product-content',
      '[class*="product-detail"]',
      '[class*="product-info"]',
      '.content',
      '.main-content',
      'main',
      'body'
    ];

    for (const selector of fallbackSelectors) {
      try {
        const element = document.querySelector(selector);
        if (element) {
          console.log(`✅ Using fallback selector: ${selector}`);
          this.options.targetSelector = selector;
          this.injectSection();
          this.setupMutationObserver();
          this.isInitialized = true;
          return true;
        }
      } catch (e) {
        continue;
      }
    }

    console.warn('⚠️ Could not find any suitable target element. Creating section at end of body.');
    this.injectAtBodyEnd();
    return false;
  }

  /**
   * Inject section at the end of body as last resort
   */
  injectAtBodyEnd() {
    const section = this.createGuaranteedSection();
    document.body.appendChild(section);
    this.setupMutationObserver();
    this.isInitialized = true;
    this.dispatchSectionEvent('guaranteed-section:added', section);
    console.log('Guaranteed section added to end of body');
  }

  /**
   * Wait for target element with retry mechanism
   */
  waitForTarget() {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      
      const checkTarget = () => {
        const target = document.querySelector(this.options.targetSelector);
        
        if (target) {
          console.log(`✅ Target element found: ${this.options.targetSelector}`);
          resolve(target);
          return;
        }
        
        attempts++;
        console.log(`🔍 Attempt ${attempts}/${this.options.retryAttempts}: Looking for ${this.options.targetSelector}`);
        
        if (attempts >= this.options.retryAttempts) {
          reject(new Error(`Target element "${this.options.targetSelector}" not found after ${attempts} attempts`));
          return;
        }
        
        setTimeout(checkTarget, this.options.retryDelay);
      };
      
      // Check if DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkTarget);
      } else {
        checkTarget();
      }
    });
  }

  /**
   * Create and inject the guaranteed section
   */
  injectSection() {
    const target = document.querySelector(this.options.targetSelector);
    
    if (!target) {
      throw new Error('Target element not found during injection');
    }

    // Check if section already exists
    if (document.getElementById(this.options.sectionId)) {
      console.warn('Guaranteed section already exists');
      return;
    }

    const section = this.createGuaranteedSection();
    
    // Insert after the target element
    target.insertAdjacentElement('afterend', section);
    
    // Dispatch custom event
    this.dispatchSectionEvent('guaranteed-section:added', section);
  }

  /**
   * Create the guaranteed section HTML element
   */
  createGuaranteedSection() {
    const section = document.createElement('section');
    section.id = this.options.sectionId;
    section.className = this.options.className;
    section.setAttribute('aria-label', 'Product Guarantee Information');
    
    section.innerHTML = `
      <div class="trust-banner" style="display:flex;justify-content:space-between;width:100%;gap:10px;margin-bottom:15px;padding:15px;border:1px solid #e0e0e0;border-radius:8px;background-color:#f9f9f9;">
          <div style="display:flex;flex-direction:column;gap:8px;flex:1;justify-content:space-between;">
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
              <!-- Truck Icon -->
              <svg role="img" width="25" height="25" viewBox="0 0 63 50" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="Delivery Truck">
                <title>Delivery Truck Icon</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2001 4.93328H31.5001C34.1142 4.93328 36.2334 7.05247 36.2334 9.66662L36.2334 26.2333H5.46673V9.66662C5.46673 7.05247 7.58592 4.93328 10.2001 4.93328ZM5.46673 30.9666L36.2334 30.9666L36.2334 35.6999H24.2805C22.7865 34.2359 20.7404 33.3333 18.4834 33.3333C16.2264 33.3333 14.1803 34.2359 12.6863 35.6999H10.2001C7.58592 35.6999 5.46673 33.5808 5.46673 30.9666ZM38.6001 40.4333H26.6828C26.7381 40.8198 26.7667 41.2148 26.7667 41.6166C26.7667 46.1914 23.0582 49.8999 18.4834 49.8999C13.9086 49.8999 10.2001 46.1914 10.2001 41.6166C10.2001 41.2148 10.2287 40.8198 10.284 40.4333H10.2001C4.97177 40.4333 0.733398 36.1949 0.733398 30.9666V9.66662C0.733398 4.43832 4.97177 0.199951 10.2001 0.199951H31.5001C35.9112 0.199951 39.6176 3.21692 40.6685 7.29995L45.6977 7.29995C45.6985 7.29995 45.6993 7.29995 45.7001 7.29995C45.7008 7.29995 45.7016 7.29995 45.7024 7.29995H46.9597C48.3757 7.29993 49.6344 7.2999 50.704 7.38062C51.8055 7.46376 52.8886 7.64203 53.9092 8.0956C56.0671 9.05468 57.2677 10.9431 58.4669 13.3415C60.4094 17.2266 61.7148 20.6434 62.1453 21.9349L62.2667 22.2992V32.15C62.2667 34.3287 61.7152 36.1418 60.6093 37.5387C59.6835 38.7081 58.505 39.4142 57.3423 39.8393C57.4674 40.4119 57.5334 41.0065 57.5334 41.6166C57.5334 46.1914 53.8248 49.8999 49.2501 49.8999C44.6753 49.8999 40.9667 46.1914 40.9667 41.6166C40.9667 41.2148 40.9953 40.8198 41.0506 40.4333H40.9667H38.6001ZM40.9667 35.7H43.4529C44.9469 34.2359 46.9931 33.3333 49.2501 33.3333C51.4577 33.3333 53.4637 34.1969 54.9485 35.6048C55.1051 35.5735 55.2572 35.5371 55.4041 35.4952C56.1161 35.2917 56.5889 34.9914 56.8981 34.6007C57.1974 34.2227 57.5334 33.5212 57.5334 32.15L57.5334 26.2333H48.0667C45.4526 26.2333 43.3334 24.1141 43.3334 21.5V12.0333H40.9667V35.7ZM48.0667 12.0351V21.5H56.9371C56.3306 19.9666 55.4089 17.8097 54.2333 15.4584C53.0658 13.1235 52.4914 12.6452 51.9868 12.421C51.6761 12.2829 51.2061 12.1653 50.3477 12.1005C49.7228 12.0534 48.9893 12.0393 48.0667 12.0351ZM10.2001 12.0333C10.2001 10.7262 11.2597 9.66662 12.5667 9.66662H29.1334C30.4405 9.66662 31.5001 10.7262 31.5001 12.0333C31.5001 13.3404 30.4405 14.4 29.1334 14.4H12.5667C11.2597 14.4 10.2001 13.3404 10.2001 12.0333ZM12.5667 16.7666C11.2597 16.7666 10.2001 17.8262 10.2001 19.1333C10.2001 20.4404 11.2597 21.5 12.5667 21.5H29.1334C30.4405 21.5 31.5001 20.4404 31.5001 19.1333C31.5001 17.8262 30.4405 16.7666 29.1334 16.7666H12.5667ZM18.4834 45.1666C20.444 45.1666 22.0334 43.5772 22.0334 41.6166C22.0334 39.656 20.444 38.0666 18.4834 38.0666C16.5228 38.0666 14.9334 39.656 14.9334 41.6166C14.9334 43.5772 16.5228 45.1666 18.4834 45.1666ZM52.8001 41.6166C52.8001 43.5772 51.2107 45.1666 49.2501 45.1666C47.2895 45.1666 45.7001 43.5772 45.7001 41.6166C45.7001 39.656 47.2895 38.0666 49.2501 38.0666C51.2107 38.0666 52.8001 39.656 52.8001 41.6166Z"/>
              </svg>
              <strong>Tracked Shipping on All Orders</strong>
            </span>
            
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
              <!-- Secure Payments Icon -->
              <svg viewBox="0 0 25 25" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Secure Payments">
                <path d="M21.3491 13.3835V9.84456C21.3491 9.37526 21.1627 8.92518 20.8309 8.59334C20.499 8.26149 20.0489 8.07507 19.5797 8.07507H2.76949C2.30019 8.07507 1.85012 8.26149 1.51827 8.59334C1.18643 8.92518 1 9.37526 1 9.84456V22.231C1 22.7003 1.18643 23.1504 1.51827 23.4822C1.85012 23.8141 2.30019 24.0005 2.76949 24.0005H19.5797C20.0489 24.0005 20.499 23.8141 20.8309 23.4822C21.1627 23.1504 21.3491 22.7003 21.3491 22.231V17.8073M6.9101 3.65134L16.9431 1.03249C17.0559 1.00073 17.1739 0.992135 17.29 1.00723C17.4062 1.02233 17.5181 1.06081 17.6189 1.12034C17.7198 1.17987 17.8076 1.25923 17.8769 1.35361C17.9463 1.448 17.9958 1.55546 18.0225 1.66951L18.518 3.65134" stroke="#004aad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.1186 13.3833H18.6949C18.2063 13.3833 17.8102 13.7794 17.8102 14.268V16.9223C17.8102 17.4109 18.2063 17.807 18.6949 17.807H23.1186C23.6073 17.807 24.0034 17.4109 24.0034 16.9223V14.268C24.0034 13.7794 23.6073 13.3833 23.1186 13.3833Z" stroke="#004aad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <strong>Secure Payments</strong>
            </span>
            
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
              <!-- Fast Delivery Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="#004aad" height="25" width="25" viewBox="0 0 422.518 422.518" aria-label="Fast Delivery">
                <path d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"/>
              </svg>
              <strong>Fast Delivery</strong>
            </span>
          </div>
          
          <div style="display:flex;flex-direction:column;gap:8px;flex:0.8;justify-content:space-between;">
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px">
              <!-- Headphones Icon -->
              <svg role="img" width="25" height="25" viewBox="0 0 476 476" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="24/7 Support">
                <title>Customer Support Icon</title>
                <g><path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z"/></g>
              </svg>
              <strong>24/7 Customer Support</strong>
            </span>
            
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px;">
              <!-- Returns Icon -->
              <svg role="img" width="20" height="20" viewBox="0 0 20 20" fill="#004aad" xmlns="http://www.w3.org/2000/svg" aria-label="Returns Policy">
                <title>Return Product Arrow Icon</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1H2C1.44772 1 1 1.44772 1 2V18C1 18.5523 1.44772 19 2 19H16V20H2C0.895431 20 0 19.1046 0 18V2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V12H19V2C19 1.44772 18.5523 1 18 1ZM7 4.5C7 4.22386 7.22386 4 7.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H7.5C7.22386 5 7 4.77614 7 4.5ZM13.8535 11.8536C14.0488 11.6583 14.0488 11.3417 13.8535 11.1464C13.6582 10.9512 13.3417 10.9512 13.1464 11.1464L10.2928 14L13.1464 16.8536C13.3417 17.0488 13.6582 17.0488 13.8535 16.8536C14.0488 16.6583 14.0488 16.3417 13.8535 16.1464L12.2071 14.5H15.5C17.8223 14.5 19 15.8653 19 17V19.5C19 19.7761 19.2239 20 19.5 20C19.7761 20 20 19.7761 20 19.5V17C20 15.1347 18.1777 13.5 15.5 13.5H12.2071L13.8535 11.8536Z"/>
              </svg>
              <strong>14-Day Returns</strong>
            </span>
            
            <span style="display:flex;align-items:center;font-size:14px;color:#333;gap:10px;">
              <!-- Warehouse Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="#004aad" height="25" width="25" viewBox="0 0 512 512" aria-label="UK Warehouse">
                <g><g><path d="M499.933,163.855L260.501,1.383c-2.716-1.845-6.284-1.844-9.002,0L12.067,163.855c-2.199,1.492-3.516,3.976-3.516,6.634v333.495c0,4.427,3.589,8.017,8.017,8.017h478.864c4.428,0,8.017-3.589,8.017-8.017V170.489C503.449,167.831,502.133,165.347,499.933,163.855z M196.676,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V495.967z M92.994,205.228v-18.171h326.013v18.171H92.994z M144.301,444.66v-35.273h18.171v35.273H144.301z M196.676,393.353h-26.188h-34.205h-26.188v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V393.353z M144.301,342.046v-35.273h18.171v35.273H144.301z M299.29,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.428,0,8.017-3.589,8.017-8.017v-43.29h18.171V495.967z M246.914,444.66v-35.273h18.171v35.273H246.914z M487.416,495.967h-69.478V324.409c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v171.557h-86.58V401.37c0-4.427-3.588-8.017-8.017-8.017H212.71v-94.597c0-4.427-3.589-8.017-8.017-8.017h-94.597v-69.478h291.808v68.944c0,4.427,3.588,8.017,8.017,8.017c4.428,0,8.017-3.589,8.017-8.017v-68.944h9.086c4.428,0,8.017-3.589,8.017-8.017V179.04c0-4.427-3.588-8.017-8.017-8.017H84.977c-4.427,0-8.017,3.589-8.017,8.017v34.205c0,4.427,3.589,8.017,8.017,8.017h9.086v274.706H24.585V174.737L256,17.705l231.415,157.032V495.967z"/></g></g>
              </svg>
              <strong>UK Warehouse Delivery</strong>
            </span>
          </div>
        </div>
    `;
    
    return section;
  }

  /**
   * Setup mutation observer to handle dynamic content changes
   */
  setupMutationObserver() {
    if (!window.MutationObserver) {
      console.warn('MutationObserver not supported');
      return;
    }

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check if target element was removed and re-added
        if (mutation.type === 'childList') {
          const target = document.querySelector(this.options.targetSelector);
          const section = document.getElementById(this.options.sectionId);
          
          if (target && !section) {
            console.log('Target element detected without guaranteed section, re-injecting...');
            this.injectSection();
          }
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Dispatch custom events
   */
  dispatchSectionEvent(eventType, element) {
    const event = new CustomEvent(eventType, {
      detail: { element, manager: this },
      bubbles: true
    });
    document.dispatchEvent(event);
  }

  /**
   * Remove the guaranteed section and cleanup
   */
  remove() {
    const section = document.getElementById(this.options.sectionId);
    if (section) {
      section.remove();
      this.dispatchSectionEvent('guaranteed-section:removed', section);
    }

    const styles = document.getElementById(`${this.options.sectionId}-styles`);
    if (styles) {
      styles.remove();
    }

    if (this.observer) {
      this.observer.disconnect();
    }

    this.isInitialized = false;
  }

  /**
   * Update section content
   */
  updateContent(newContent) {
    const section = document.getElementById(this.options.sectionId);
    if (!section) {
      console.warn('Cannot update content: section not found');
      return;
    }

    const contentContainer = section.querySelector(`.${this.options.className}__content`);
    if (contentContainer && newContent) {
      contentContainer.innerHTML = newContent;
      this.dispatchSectionEvent('guaranteed-section:updated', section);
    }
  }
}

// Usage examples and initialization
const guaranteedManager = new GuaranteedSectionManager({
  // Optional custom configuration
  // targetSelector: '.product-details-module__content',
  // sectionId: 'guaranteed-section',
  // className: 'guaranteed-section',
  // retryAttempts: 5,
  // retryDelay: 500
});

// Initialize when DOM is ready with better error handling
const initializeGuaranteedSection = () => {
  guaranteedManager.init()
    .then(() => {
      console.log('✅ Guaranteed section initialization completed successfully');
    })
    .catch((error) => {
      console.warn('⚠️ Primary initialization failed, but fallback may have worked:', error.message);
    });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGuaranteedSection);
} else {
  initializeGuaranteedSection();
}

// Event listeners for custom events
document.addEventListener('guaranteed-section:added', (event) => {
  console.log('Guaranteed section added:', event.detail.element);
});

document.addEventListener('guaranteed-section:removed', (event) => {
  console.log('Guaranteed section removed:', event.detail.element);
});

document.addEventListener('guaranteed-section:updated', (event) => {
  console.log('Guaranteed section updated:', event.detail.element);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GuaranteedSectionManager;
}

// Global access
window.GuaranteedSectionManager = GuaranteedSectionManager;
window.guaranteedManager = guaranteedManager;
