# Proje Notları

## Hesap Bilgileri

| Servis   | Kullanıcı / Email         | Notlar                          |
|----------|---------------------------|---------------------------------|
| **Mail** | calcomweb@gmail.com       | Proje ana mail adresi           |
| **GitHub** | calcomweb                | SSH key bağlı (ed25519)         |
| **Vercel** | ubterzioglu              | CLI bağlı                       |
| **Supabase** | calcomweb@gmail.com    | CLI token ile login             |

## Supabase

- **Doğru Proje:** `xllosidsyodtvghslymq` (calcom-supabase)
- **Silinecek:** `jqpsdjqwzkwicjebbnzx` (CALCOM) — boş, kullanılmıyor
- **URL:** `https://xllosidsyodtvghslymq.supabase.co`
- **Migration Durumu:** İlk 2 migration remote'a uygulanmış, kalan 11 bekliyor
- **Region:** Central EU (Frankfurt)

## GitHub

- **SSH Key:** `~/.ssh/id_ed25519_github`
- **Repo:** calcomweb (organization/user)

## Vercel

- **Kullanıcı:** ubterzioglu
- **CLI Versiyon:** 50.5.0
- **URL:** https://calcom-rosy-two.vercel.app
- **Durum:** Production Deploy edildi. Env değişkenleri eklendi.
- **Git:** GitHub repo (calcomweb/calcom) bağlı.

## Yapılacaklar

- [x] Kalan 11 Supabase migration'ı push edilecek (Remote ile senkronize - `xllosidsyodtvghslymq`)
- [ ] Boş Supabase projesi (jqpsdjqwzkwicjebbnzx) silinecek
- [x] Vercel'de yeni proje oluşturulacak
- [x] GitHub repo'su Vercel'e bağlanacak
