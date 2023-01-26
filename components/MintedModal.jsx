import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { claim, fluff2 } from '../public/assets';
import localFont from '@next/font/local';
import Image from 'next/image';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const MintedModal = ({ txHash, openMintModal, handleOnClose }) => {
  return (
    <>
      <Transition appear show={openMintModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-12 px-24 py-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`${lemonMilk.variable} font-sans text-2xl font-medium leading-6 text-black flex items-center gap-2 uppercase`}
                  >
                    Claim Successful!!{' '}
                  </Dialog.Title>
                  <div className="mt-2 mb-2 py-1">
                    <p
                      className={`${euclid.variable} font-serif text-md text-black`}
                    >
                      Your choice domain name has been minted successfully.
                    </p>
                    <div className="flex justify-between">
                      <Image
                        src={claim}
                        width={200}
                        height={100}
                        className="mt-6"
                      />
                      <Image src={fluff2} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span
                      className="text-gray-700  font-medium  text-lg  hover:opacity-70 border-none"
                      //   onClick={closeModal}
                    >
                      <a
                        target="_blank"
                        className="border-gray-100"
                        href={'https://mumbai.polygonscan.com/tx/' + txHash}
                      >
                        To see more, view it on Opensea
                      </a>
                    </span>
                    &nbsp;&nbsp;
                    {/* <button
                      type="button"
                      className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 "
                      //   onClick={closeModal}
                    >
                      <a target="_blank" href="">
                        {' '}
                        Confirm on Opensea
                      </a>
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MintedModal;
