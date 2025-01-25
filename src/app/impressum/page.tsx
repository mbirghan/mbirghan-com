import { SimpleLayout } from '@/components/SimpleLayout'

export default function Impressum() {
  return (
    <SimpleLayout title="Impressum" intro="">
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          {process.env.NAME}
          {process.env.CO && (
            <>
              <br />
              {process.env.CO}
            </>
          )}
          <br />
          {process.env.ADDRESS}
          <br />
          {process.env.CITY}
        </p>
        <h2>Kontakt</h2>
        <p>
          {process.env.PHONE && (
            <>
              Telefon: {process.env.PHONE}
              <br />
            </>
          )}
          E-Mail: {process.env.EMAIL}
        </p>
      </div>
    </SimpleLayout>
  )
}
