import React, { useState } from 'react';
import { Text, SelectBase, Button } from '@axa-fr/react-toolkit-all';

export const TaxComputationForm = () => {
  const [adultNumber, adultNumberSetter] = useState(1);
  const [salaryAmount, salaryAmountSetter] = useState(0);
  const [numberOfChildren, numberOfChildrenSetter] = useState(0);
  const [year, yearSetter] = useState(2020);

  return (
    <form className="af-form tax-form">
      <h1 className="af-title--content">Formulaire</h1>
      <div className="af-form__group">
        <dl>
          <dt>Nombre adulte(s) :</dt>
          <dd>
            <Text
              id="adultnumber"
              name="adultnumber"
              value={adultNumber}
              onChange={({ value }) => adultNumberSetter(value)}
            />
          </dd>
        </dl>
        <dl>
          <dt>Montant salaire :</dt>
          <dd>
            <Text
              id="salaryamount"
              name="salaryamount"
              value={salaryAmount}
              onChange={({ value }) => salaryAmountSetter(value)}
            />
          </dd>
        </dl>
        <dl>
          <dt>Nombre enfant(s) :</dt>
          <dd>
            <Text
              id="numberofchildren"
              name="numberofchildren"
              value={numberOfChildren}
              onChange={({ value }) => numberOfChildrenSetter(value)}
            />
          </dd>
        </dl>
        <dl>
          <dt>Année :</dt>
          <dd>
            <SelectBase
              key="key"
              name="year"
              options={[
                { value: '2019', label: '2019' },
                { value: '2020', label: '2020' },
              ]}
              value={year}
              onChange={({ value }) => yearSetter(value)}
            />
          </dd>
        </dl>
      </div>
      <div className="af-form__group af-form__btn">
        <Button
          classModifier="hasiconLeft"
          id="validation-button"
          onClick={() => console.log()}>
          <span className="af-btn__text">Calculer</span>
          <i className="glyphicon glyphicon-stats" />
        </Button>
      </div>
    </form>
  );
};
