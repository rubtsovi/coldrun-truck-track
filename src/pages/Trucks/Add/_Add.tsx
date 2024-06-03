import { useRef } from 'react';

import { Link } from '@tanstack/react-router';
import { AxiosError, AxiosResponse } from 'axios';
import { Toast } from 'primereact/toast';

import { postTruck } from '_api/trucks.ts';
import PageLayout from '_components/PageLayout';
import TruckForm, { type TruckFormSchema } from '_components/TruckForm';
import i18n from '_config/i18n';
import { Route as truckDetailsRoute } from '_routes/trucks_.details.$truckId.ts';
import router from '_src/router';

function Add() {
  const toast = useRef<Toast>(null);
  return (
    <PageLayout title='Add truck'>
      <Toast ref={toast} />
      <TruckForm
        model={{ name: '', code: '', description: '', status: null }}
        onSubmit={async (data, form) => {
          try {
            const { id } = await postTruck(data);
            router.navigate({ to: truckDetailsRoute.to, params: { truckId: id.toString(10) } });
          } catch (err) {
            // TODO: exclude to function in order to keep DRY
            if (err instanceof AxiosError) {
              const res = err.response as AxiosResponse<
                Record<keyof TruckFormSchema, keyof typeof i18n.errors>
              >;
              if (res) {
                Object.entries(res.data).forEach(([prop, errCode]) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  form.setError(prop, { message: i18n.errors[errCode] });
                });
                return;
              }
            }
            toast.current?.show({
              severity: 'error',
              summary: 'Error',
              detail: 'Something went wrong',
            });
          }
        }}
      />

      <div>
        <Link className='p-button p-button-info' to={'/trucks'}>
          Back to list
        </Link>
      </div>
    </PageLayout>
  );
}

export default Add;
