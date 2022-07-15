import { useEffect, useState } from 'react';
import { useApiRef } from '../../store/ApiRefContext';
import urlTo from "../urlTo";

export function useFeaturedBanners() {
  const { apiRef, isApiRefLoading } = useApiRef();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiRefLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });

        const response = await fetch(urlTo.banners().replace('APIREF', apiRef), {
          signal: controller.signal
        });
        const data = await response.json();

        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiRefLoading]);

  return featuredBanners;
}
