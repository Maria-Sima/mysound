import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, SongCard } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP",
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;
  // const data = [
  //   {
  //     layout: "5",
  //     type: "MUSIC",
  //     key: "544842905",
  //     title: "Пыяла",
  //     subtitle: "АИГЕЛ",
  //     share: {
  //       subject: "Пыяла - АИГЕЛ",
  //       text: "Пыяла by АИГЕЛ",
  //       href: "https://www.shazam.com/track/544842905/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0",
  //       image:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
  //       twitter: "I used @Shazam to discover Пыяла by АИГЕЛ.",
  //       html: "https://www.shazam.com/snippets/email-share/544842905?lang=en-US&country=GB",
  //       avatar:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/95/1a/38/951a381e-f740-b978-8858-16413b6f2b65/mzl.erbtullm.jpg/800x800cc.jpg",
  //       snapchat: "https://www.shazam.com/partner/sc/track/544842905",
  //     },
  //     images: {
  //       background:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/95/1a/38/951a381e-f740-b978-8858-16413b6f2b65/mzl.erbtullm.jpg/800x800cc.jpg",
  //       coverart:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
  //       coverarthq:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
  //       joecolor: "b:000b15p:f4ffffs:d2d5fft:c3ced0q:a7acd0",
  //     },
  //     hub: {
  //       type: "APPLEMUSIC",
  //       image:
  //         "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
  //       actions: [
  //         {
  //           name: "apple",
  //           type: "applemusicplay",
  //           id: "1539712121",
  //         },
  //         {
  //           name: "apple",
  //           type: "uri",
  //           uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/01/18/c0011847-e7d5-e44a-c9d2-ed20e4897311/mzaf_13815513855997291591.plus.aac.ep.m4a",
  //         },
  //       ],
  //       options: [
  //         {
  //           caption: "OPEN",
  //           actions: [
  //             {
  //               name: "hub:applemusic:deeplink",
  //               type: "applemusicopen",
  //               uri: "https://music.apple.com/gb/album/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0/1539712120?i=1539712121&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
  //             },
  //             {
  //               name: "hub:applemusic:deeplink",
  //               type: "uri",
  //               uri: "https://music.apple.com/gb/album/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0/1539712120?i=1539712121&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
  //             },
  //           ],
  //           beacondata: {
  //             type: "open",
  //             providername: "applemusic",
  //           },
  //           image:
  //             "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
  //           type: "open",
  //           listcaption: "Open in Apple Music",
  //           overflowimage:
  //             "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
  //           colouroverflowimage: false,
  //           providername: "applemusic",
  //         },
  //       ],
  //       explicit: false,
  //       displayname: "APPLE MUSIC",
  //     },
  //     artists: [
  //       {
  //         alias: "%D0%B0%D0%B8%D0%B3%D0%B5%D0%BB",
  //         id: "42",
  //         adamid: "1222911062",
  //       },
  //     ],
  //     url: "https://www.shazam.com/track/544842905/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0",
  //     highlightsurls: {
  //       artisthighlightsurl:
  //         "https://cdn.shazam.com/video/v3/en-US/GB/web/1222911062/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1607854462",
  //       trackhighlighturl:
  //         "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1607854462?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
  //     },
  //     properties: {},
  //   },
  //   {
  //     layout: "5",
  //     type: "MUSIC",
  //     key: "684831912",
  //     title: "Georgian Disco (Live)",
  //     subtitle: "Nikos Band",
  //     share: {
  //       subject: "Georgian Disco (Live) - Nikos Band",
  //       text: "Georgian Disco (Live) by Nikos Band",
  //       href: "https://www.shazam.com/track/684831912/georgian-disco-live",
  //       image:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/81/a1/4181a1da-5f6f-5482-767a-11ddcd080430/cover.jpg/400x400cc.jpg",
  //       twitter:
  //         "I used @Shazam to discover Georgian Disco (Live) by Nikos Band.",
  //       html: "https://www.shazam.com/snippets/email-share/684831912?lang=en-US&country=GB",
  //       snapchat: "https://www.shazam.com/partner/sc/track/684831912",
  //     },
  //     images: {
  //       background:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/81/a1/4181a1da-5f6f-5482-767a-11ddcd080430/cover.jpg/400x400cc.jpg",
  //       coverart:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/81/a1/4181a1da-5f6f-5482-767a-11ddcd080430/cover.jpg/400x400cc.jpg",
  //       coverarthq:
  //         "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/81/a1/4181a1da-5f6f-5482-767a-11ddcd080430/cover.jpg/400x400cc.jpg",
  //       joecolor: "b:080705p:cea9b9s:d1a48ft:a68995q:a88473",
  //     },
  //     hub: {
  //       type: "APPLEMUSIC",
  //       image:
  //         "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
  //       actions: [
  //         {
  //           name: "apple",
  //           type: "applemusicplay",
  //           id: "1721343094",
  //         },
  //         {
  //           name: "apple",
  //           type: "uri",
  //           uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b9/f9/a3/b9f9a3e3-edd0-aa97-cc0d-32534156da9a/mzaf_12774174634439820443.plus.aac.ep.m4a",
  //         },
  //       ],
  //       options: [
  //         {
  //           caption: "OPEN",
  //           actions: [
  //             {
  //               name: "hub:applemusic:deeplink",
  //               type: "applemusicopen",
  //               uri: "https://music.apple.com/gb/album/georgian-disco-live/1721343092?i=1721343094&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
  //             },
  //             {
  //               name: "hub:applemusic:deeplink",
  //               type: "uri",
  //               uri: "https://music.apple.com/gb/album/georgian-disco-live/1721343092?i=1721343094&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
  //             },
  //           ],
  //           beacondata: {
  //             type: "open",
  //             providername: "applemusic",
  //           },
  //           image:
  //             "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
  //           type: "open",
  //           listcaption: "Open in Apple Music",
  //           overflowimage:
  //             "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
  //           colouroverflowimage: false,
  //           providername: "applemusic",
  //         },
  //       ],
  //       explicit: false,
  //       displayname: "APPLE MUSIC",
  //     },
  //     artists: [
  //       {
  //         alias: "nikos-band",
  //         id: "42",
  //         adamid: "1720359526",
  //       },
  //     ],
  //     url: "https://www.shazam.com/track/684831912/georgian-disco-live",
  //     highlightsurls: {
  //       artisthighlightsurl:
  //         "https://cdn.shazam.com/video/v3/en-US/GB/web/1720359526/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
  //     },
  //     properties: {},
  //   },
  // ];

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
