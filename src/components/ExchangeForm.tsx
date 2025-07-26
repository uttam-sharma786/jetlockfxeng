import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const ExchangeForm = () => {
  const { t } = useTranslation();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MXN");
  const [amount, setAmount] = useState("");
  const [city, setCity] = useState("");

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "JPY", name: "Japanese Yen" },
  ];

  return (
    <Card className="p-6 shadow-medium bg-card/90 backdrop-blur-sm border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* From Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t('exchange.fromLabel')}</label>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t('exchange.toLabel')}</label>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t('exchange.amountLabel')}</label>
          <Input
            type="number"
            placeholder="1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-12"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t('exchange.cityLabel')}</label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder={t('exchange.selectCity')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mexico-city">Mexico City</SelectItem>
              <SelectItem value="cancun">Cancun</SelectItem>
              <SelectItem value="guadalajara">Guadalajara</SelectItem>
              <SelectItem value="monterrey">Monterrey</SelectItem>
              <SelectItem value="playa-del-carmen">Playa del Carmen</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full mt-6 h-12 bg-gradient-primary hover:opacity-90 transition-opacity" size="lg">
        {t('exchange.searchButton')}
      </Button>
    </Card>
  );
};

export default ExchangeForm;