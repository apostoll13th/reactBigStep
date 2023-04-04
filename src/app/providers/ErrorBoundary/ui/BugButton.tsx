import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import {t} from "i18next";

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {t('брось ошибку')}
    </Button>
  );
};
