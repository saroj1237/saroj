---
title: AdMob Monetization in Flutter
date: 2024-02-12
category: Flutter
excerpt: A practical guide to integrating Google AdMob into your Flutter app — from setup and ad unit configuration to displaying banner and interstitial ads.
slug: admob-monetization-flutter
---

Monetizing a mobile app is one of the most common goals for indie developers and small teams. Google AdMob remains a reliable choice for Flutter apps because of its mature SDK, wide advertiser network, and straightforward Flutter plugin.

## Why AdMob?

AdMob works well for apps with steady daily active users. It supports multiple ad formats — banner, interstitial, rewarded, and native — so you can pick formats that fit your UX without overwhelming users.

## Setup

Start by adding the `google_mobile_ads` package to your `pubspec.yaml`:

```yaml
dependencies:
  google_mobile_ads: ^5.0.0
```

Initialize the SDK early in your app lifecycle, typically inside `main()` before `runApp()`:

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await MobileAds.instance.initialize();
  runApp(const MyApp());
}
```

## Creating ad units

In the AdMob console, create ad units for each format you plan to use. Use test ad unit IDs during development to avoid policy violations.

## Displaying a banner ad

Banner ads are the least intrusive format and work well on list screens or below primary content:

```dart
BannerAd(
  adUnitId: bannerAdUnitId,
  size: AdSize.banner,
  request: const AdRequest(),
  listener: BannerAdListener(
    onAdLoaded: (ad) => setState(() => _bannerAd = ad as BannerAd),
    onAdFailedToLoad: (ad, error) {
      ad.dispose();
    },
  ),
)..load();
```

## Best practices

- Load ads after the main UI is ready, not during splash screens.
- Dispose ad objects when widgets are removed from the tree.
- Use test devices while developing.
- Avoid placing ads too close to buttons users tap frequently.

## Conclusion

AdMob integration in Flutter is manageable with the official plugin. Start with one ad format, measure impact on retention, then expand carefully based on real usage data.
