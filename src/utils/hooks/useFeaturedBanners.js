import { useEffect, useState } from 'react';
import urlTo from "../urlTo";
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedBanners() {
  const { ref: apiRef, isLoading: isApiLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiLoading) {
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
  }, [apiRef, isApiLoading]);

  return featuredBanners;
}
